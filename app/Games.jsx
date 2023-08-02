import Game from "./Game";

export default async function Games() {
  const fetchData = await fetch(
    "https://api.rawg.io/api/games?key=cd9f48419af04cc7b8f18d08f0cac5ec"
  );

  const games = await fetchData.json();
  console.log(games);

  return (
    <div className="grid gap-16 grid-cols-fluid xl:grid-cols-4 p-6">
      {games.results.map((game) => (
        <Game key={game.id} game={game} />
      ))}
    </div>
  );
}
