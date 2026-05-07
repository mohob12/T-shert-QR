"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { BellRing, Clock3, Users, Ticket } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { getQueueSummary } from "@/lib/dorak";
import type { Shop, Ticket as QueueTicket } from "@/types/dorak";
import QueueAlert from "@/components/queue-alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ShopPage = () => {
  const { id } = useParams();
  const [shop, setShop] = useState<Shop | null>(null);
  const [tickets, setTickets] = useState<QueueTicket[]>([]);
  const [myTicket, setMyTicket] = useState<QueueTicket | null>(null);
  const [triggerKey, setTriggerKey] = useState("init");

  useEffect(() => {
    if (!id) return;

    const loadData = async () => {
      const { data: shopData } = await supabase.from("shops").select("*").eq("id", id).single();
      const { data: ticketData } = await supabase
        .from("tickets")
        .select("*")
        .eq("shop_id", id)
        .order("queue_number", { ascending: true });

      setShop(shopData ?? null);
      setTickets(ticketData ?? []);
    };

    void loadData();

    const channel = supabase
      .channel(`shop-${id}`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "tickets", filter: `shop_id=eq.${id}` },
        async () => {
          const { data } = await supabase
            .from("tickets")
            .select("*")
            .eq("shop_id", id)
            .order("queue_number", { ascending: true });
          setTickets(data ?? []);
          setTriggerKey(String(Date.now()));
        },
      )
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, [id]);

  const queueSummary = useMemo(() => {
    if (!myTicket) return null;
    return getQueueSummary(tickets, myTicket.queue_number);
  }, [tickets, myTicket]);

  const bookMyTurn = async () => {
    if (!id) return;
    const nextNumber = (tickets[tickets.length - 1]?.queue_number ?? 0) + 1;
    const { data } = await supabase
      .from("tickets")
      .insert({
        shop_id: id,
        customer_name: "عميل",
        queue_number: nextNumber,
        status: "waiting",
      })
      .select()
      .single();

    if (data) {
      setMyTicket(data);
      setTriggerKey(String(Date.now()));
    }
  };

  return (
    <main dir="rtl" className="min-h-screen bg-slate-50 px-4 py-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        <Card className="rounded-[2rem] border-slate-200 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-right text-2xl font-black text-slate-900">
              {shop?.name ?? "صفحة الانتظار"}
            </CardTitle>
            <p className="text-right text-sm leading-7 text-slate-600">
              احجز دورك بسهولة، وتابع ترتيبك مباشرة من نفس الصفحة.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={bookMyTurn} className="h-14 w-full rounded-2xl text-lg">
              <Ticket className="ml-2 h-5 w-5" />
              احجز دوري
            </Button>

            {myTicket && queueSummary && (
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-100 p-4 text-center">
                  <p className="text-sm text-slate-500">رقم التذكرة</p>
                  <p className="mt-1 text-2xl font-black text-slate-900">{myTicket.queue_number}</p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-4 text-center">
                  <p className="text-sm text-slate-500">قبلك في الدور</p>
                  <p className="mt-1 text-2xl font-black text-slate-900">{queueSummary.beforeYou}</p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-4 text-center">
                  <p className="text-sm text-slate-500">الانتظار التقريبي</p>
                  <p className="mt-1 text-2xl font-black text-slate-900">{queueSummary.estimatedWaitMinutes} دقيقة</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <QueueAlert
          title="تابع دورك الآن"
          message="عند تقدم الدور يتم تحديث الصفحة تلقائيًا مع تنبيه بصوت واهتزاز حتى لا يفوتك الدور."
          triggerKey={triggerKey}
        />

        <Card className="rounded-[2rem] border-slate-200 bg-white shadow-sm">
          <CardContent className="grid gap-3 p-5 sm:grid-cols-2">
            <div className="rounded-2xl bg-emerald-50 p-4">
              <Users className="h-5 w-5 text-emerald-600" />
              <p className="mt-2 text-sm text-slate-600">عدد المنتظرين</p>
              <p className="text-2xl font-black text-slate-900">{tickets.filter((ticket) => ticket.status === "waiting").length}</p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-4">
              <Clock3 className="h-5 w-5 text-sky-600" />
              <p className="mt-2 text-sm text-slate-600">تحديث مباشر</p>
              <p className="text-2xl font-black text-slate-900">Realtime</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default ShopPage;