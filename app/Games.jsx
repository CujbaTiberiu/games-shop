import { resolve } from "path";
import Game from "./Game";
import { Skeleton } from "@/components/ui/skeleton";

const fetchData = async () => {
  const res = await fetch(
    "https://api.rawg.io/api/games?key=cd9f48419af04cc7b8f18d08f0cac5ec"
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
      {games.map((game) => (
        <Game key={game.id} game={game} />
      ))}
    </div>
  );
}
