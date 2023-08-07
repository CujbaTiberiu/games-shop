"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiBell } from "react-icons/bi";
import { MdOutlineGames } from "react-icons/md";
import { ImMenu3, ImMenu4 } from "react-icons/im";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-slate-900 h-14 w-full text-white fixed shadow-slate-400 shadow-md flex justify-between">
      <div className="py-3 mx-2 text-2xl flex justify-start w-full">
        <Link href={"/"}>GameStation</Link>
        <MdOutlineGames />
      </div>
      <div className="flex flex-row justify-between items-center gap-2 me-2 relative right-[-100%] md:right-10">
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
      <div onClick={handleNav} className="mt-2 me-2 md:hidden">
        {!nav ? <ImMenu4 size={30} /> : <ImMenu3 size={30} />}
      </div>
      <div
        className={
          !nav
            ? "fixed right-[-100%]"
            : "fixed right-0 -top-6 w-[60%] h-[100%] bg-slate-900 border-l border-l-slate-200 mt-[82px] ease-in-out duration-500 first-letter:"
        }
      >
        <div className="flex flex-col justify-between items-center gap-3 me-2 mt-8">
          <div className="flex justify-center items-center mt-4">
            <Image
              className="rounded-3xl mx-2"
              src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              width={50}
              height={50}
              alt="avatar"
            ></Image>
            <div className="w-full">
              <BiBell className="text-2xl" />
            </div>
          </div>
          <Link href={"/"}>
            <input
              type="search"
              placeholder="type a game.."
              className="my-3 outline-none text-slate-900 p-1 rounded-lg"
            ></input>
          </Link>
        </div>
      </div>
    </div>
  );
}
