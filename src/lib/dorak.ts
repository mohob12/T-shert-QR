import type { QueueSummary, Ticket } from "@/types/dorak";

export const getQueueSummary = (tickets: Ticket[], queueNumber: number): QueueSummary => {
  const waiting = tickets.filter((ticket) => ticket.status === "waiting");
  const beforeYou = waiting.filter((ticket) => ticket.queue_number < queueNumber).length;
  const waitingCount = waiting.length;
  const estimatedWaitMinutes = beforeYou * 4;

  return {
    waitingCount,
    estimatedWaitMinutes,
    beforeYou,
  };
};

export const buildShopUrl = (shopId: string) => {
  return `${window.location.origin}/shop/${shopId}`;
};