"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Ticket } from "@/types/dorak";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const loadTickets = async () => {
      const { data } = await supabase.from("tickets").select("*").order("queue_number", { ascending: true });
      setTickets(data ?? []);
    };

    void loadTickets();

    const channel = supabase
      .channel("dashboard-tickets")
      .on("postgres_changes", { event: "*", schema: "public", table: "tickets" }, async () => {
        const { data } = await supabase.from("tickets").select("*").order("queue_number", { ascending: true });
        setTickets(data ?? []);
      })
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, []);

  const serveNext = async () => {
    const nextTicket = tickets.find((ticket) => ticket.status === "waiting");
    if (!nextTicket) return;

    await supabase.from("tickets").update({ status: "served" }).eq("id", nextTicket.id);
  };

  return (
    <main dir="rtl" className="min-h-screen bg-slate-50 px-4 py-6">
      <div className="mx-auto max-w-4xl space-y-4">
        <Card className="rounded-[2rem] border-slate-200 bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-right text-2xl font-black">لوحة التحكم</CardTitle>
            <Button onClick={serveNext} className="rounded-2xl">
              التالي
            </Button>
          </CardHeader>
        </Card>

        <Card className="rounded-[2rem] border-slate-200 bg-white shadow-sm">
          <CardContent className="space-y-3 p-5">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="flex items-center justify-between rounded-2xl bg-slate-100 p-4">
                <span className="font-bold text-slate-900">#{ticket.queue_number}</span>
                <span className="text-sm text-slate-600">{ticket.status === "waiting" ? "قيد الانتظار" : "تمت الخدمة"}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Dashboard;