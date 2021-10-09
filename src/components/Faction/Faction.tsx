import Image from "next/image";
import degens from "../../../public/degens-banner.webp";
import interstellars from "../../../public/interstellars-banner.webp";
import lunatics from "../../../public/lunatics-banner.webp";

type Props = {
  faction: "degens" | "interstellars" | "lunatics";
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
