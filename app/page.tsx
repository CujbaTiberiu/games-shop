import Image from "next/image";
import MyAccordion from "./MyAccordion";
import Games from "./Games";
import { game } from "./interfaces/game";
//cd9f48419af04cc7b8f18d08f0cac5ec
export default function Home() {
  return (
    <div className="h-full bg-black">
      <Games />
    </div>
  );
}
