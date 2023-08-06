import Image from "next/image";
import Link from "next/link";
import { BiBell } from "react-icons/bi";
import { MdOutlineGames } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="bg-slate-900 h-14 w-full text-white fixed shadow-slate-400 shadow-md flex justify-between">
      <div className="py-3 mx-2 text-2xl w-1/3 flex justify-start">
        <Link href={"/"}>GameStation</Link>
        <MdOutlineGames />
      </div>
      <div className="w-1/4 flex justify-between items-center">
        <Link href={"/"}>
          <input
            type="search"
            placeholder="type a game.."
            className="my-3 outline-none text-slate-900 p-1 rounded-lg"
          ></input>
        </Link>
        <Image
          className="rounded-3xl"
          src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
          width={40}
          height={40}
          alt="avatar"
        ></Image>
        <div className="w-1/5">
          <BiBell className="text-2xl" />
        </div>
      </div>
    </div>
  );
}
