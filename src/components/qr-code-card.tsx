"use client";

import { useMemo } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  shopUrl: string;
};

const QRCodeCard = ({ shopUrl }: Props) => {
  const qrImageUrl = useMemo(() => {
    return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(shopUrl)}`;
  }, [shopUrl]);

  const downloadImage = async (format: "png" | "pdf") => {
    const response = await fetch(qrImageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `dorak-qr.${format}`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-right text-lg">QR Code الخاص بالمتجر</CardTitle>
        <CardDescription className="text-right">
          شارك الرابط بسهولة مع العملاء، أو نزّل الرمز بصيغة PNG أو PDF.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <img src={qrImageUrl} alt="QR code" className="h-56 w-56 rounded-2xl border bg-white p-3" />
        <div className="flex w-full flex-col gap-2 sm:flex-row">
          <Button className="w-full rounded-2xl" variant="outline" onClick={() => downloadImage("png")}>
            <Download className="ml-2 h-4 w-4" />
            تحميل PNG
          </Button>
          <Button className="w-full rounded-2xl" onClick={() => downloadImage("pdf")}>
            <Download className="ml-2 h-4 w-4" />
            تحميل PDF
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QRCodeCard;