import { Faction } from "./faction";

type Data = {
  address: string;
  block_time: number;
  lp_amount?: number;
  ste_value: number;
  stt_amount?: number;
  faction: Faction;
};

export type { Data };
