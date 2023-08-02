"use client";
import Image from "next/image";
import { useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Game({ game }) {
  const rating = game.rating <= 4;

  const getTitleFontSize = (title) => {
    const length = title.length;

    // if (length <= 15) {
    //   return "text-3xl"; // Default font size for shorter titles
    // } else if (length <= 30) {
    //   return "text-2xl"; // Decreased font size for medium-length titles
    // } else {
    //   return "text-xl"; // Further decreased font size for longer titles
    // }
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg my-6">
      {/*card title */}
      <div className="py-6">
        <h1 className="text-xl font-extrabold text-center">{game.name}</h1>
      </div>
      {/*card info */}
      <div className="py-8">
        <div className="flex justify-between">
          <div>
            {game.genres.slice(0, 3).map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
          <div>
            <p
              className={
                rating
                  ? "p-4 my-2 bg-yellow-400 inline-block rounded-lg"
                  : "p-4 my-2 bg-green-400 inline-block rounded-lg"
              }
            >
              {game.rating}
            </p>
          </div>
        </div>
      </div>
      {/*card img */}
      <div>
        <Image
          className="h-60 rounded-lg"
          src={game.background_image}
          alt={game.name}
          width={1000}
          height={1000}
        />
      </div>
      {/*card footer */}
      <div className="text-center p-4 bg-teal-700 rounded-lg mx-20 my-4">
        <HoverCard>
          <HoverCardTrigger>See more..</HoverCardTrigger>
          <HoverCardContent className="bg-gray-800 text-white">
            boh
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}
