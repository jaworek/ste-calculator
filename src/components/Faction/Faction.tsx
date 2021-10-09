import Image from "next/image";
import degens from "../../../public/degens-banner.webp";
import interstellars from "../../../public/interstellars-banner.webp";
import lunatics from "../../../public/lunatics-banner.webp";
import { Faction as FactionType } from "../../types/faction";

type Props = {
  faction: FactionType;
};

const Faction = ({ faction }: Props) => {
  if (faction === "degens") {
    return <Image alt="degens faction" src={degens} />;
  }

  if (faction === "interstellars") {
    return <Image alt="interstallars faction" src={interstellars} />;
  }

  if (faction === "lunatics") {
    return <Image alt="lunatics faction" src={lunatics} />;
  }

  return null;
};

export { Faction };
