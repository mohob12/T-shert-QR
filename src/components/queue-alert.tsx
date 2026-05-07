"use client";

import { useEffect, useRef } from "react";
import { BellRing } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  message: string;
  triggerKey: string;
};

const QueueAlert = ({ title, message, triggerKey }: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=");
  }, []);

  useEffect(() => {
    if (!triggerKey) return;
    audioRef.current?.play();
    if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
  }, [triggerKey]);

  return (
    <Card className="rounded-[2rem] border-2 border-emerald-300 bg-emerald-50 shadow-sm">
      <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
        <div className="rounded-full bg-emerald-500 p-4 text-white">
          <BellRing className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-black text-slate-900">{title}</h2>
        <p className="max-w-md text-base leading-7 text-slate-700">{message}</p>
        <Button className="rounded-2xl bg-slate-950 text-white">تم التحديث</Button>
      </CardContent>
    </Card>
  );
};

export default QueueAlert;