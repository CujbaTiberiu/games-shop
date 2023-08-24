import React from "react";
import { Result, ShortScreenshot } from "../interfaces/game";
import Game from "./Game";

const fetchData = async () => {
  const res = await fetch(
    "https://api.rawg.io/api/games?key=d1000661dcb14d97af2681fbfce3c0c4&page=1"
  );

  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await res.json();
  console.log(data);
  return data.results;
};

export default async function Games() {
  const games = await fetchData();
  return (
    <div className="grid gap-4 grid-cols-fluid xl:grid-cols-4 p-6">
      {games.map((game: Result) => (
        <Game key={game.id} game={game} />
      ))}
    </div>
  );
}
