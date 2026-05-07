export type Shop = {
  id: string;
  name: string;
  description: string;
  plan: "free" | "premium";
  trial_ends_at: string | null;
  created_at: string;
};

export type Ticket = {
  id: string;
  shop_id: string;
  customer_name: string;
  queue_number: number;
  status: "waiting" | "served";
  created_at: string;
};

export type QueueSummary = {
  waitingCount: number;
  estimatedWaitMinutes: number;
  beforeYou: number;
};