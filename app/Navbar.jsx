import Image from "next/image";
import Link from "next/link";
import { BiBell } from "react-icons/bi";
import { MdOutlineGames } from "react-icons/md";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import Login from "./auth/Login";
import Logged from "./auth/Logged";
import { getServerSession } from "next-auth";
import { outhOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Navbar() {
  const session = await getServerSession(outhOptions);
  console.log(session);

  return (
    <div className="bg-slate-700 h-14 w-full text-white fixed shadow-slate-400 shadow-md flex justify-between">
      <div className="text-white py-3 mx-2 text-2xl flex justify-start w-full">
        <Link href={"/"}>GameStation</Link>
        <MdOutlineGames />
      </div>
      <div className="flex flex-row justify-evenly items-center gap-2 w-1/2">
        <Link href={"/"}>
          <input
            type="search"
            placeholder="type a game.."
            className="my-3 outline-none text-slate-900 p-1 rounded-lg"
          ></input>
        </Link>
        {!session?.user && <Login />}
        {session?.user && <Logged session={session} />}
      </div>
    </div>
  );
}
