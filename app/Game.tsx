import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Result } from "../interfaces/game";

interface GameProps {
  game: Result;
}

const Game: React.FC<GameProps> = ({ game }) => {
  //const [gameTrailer, setGameTrailer] = useState([]);
  const rating: boolean = game.rating <= 4;

  // const startPreview = (e) => {
  //   fetchTrailer(id);
  //   const vid = e.target;
  //   vid.muted = true;
  //   vid.play();
  // };

  // //  onMouseOut
  // const stopPreview = (e) => {
  //   const vid = e.target;
  //   vid.muted = false;
  //   vid.currentTime = 0;
  //   vid.pause();
  // };

  // const fetchTrailer = async (id) => {
  //   try {
  //     const data = await fetch(
  //       `https://api.rawg.io/api/games/${id}/movies?key=9c4167de934c416a8d6446e8c2fcf40a`
  //     );
  //     const trailer = await data.json();
  //     setGameTrailer(trailer);
  //     console.log(trailer.results.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchTrailer(game.id);
  // }, []);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg my-6 mt-14">
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
                  ? "px-4 py-3 my-2 bg-yellow-400 inline-block rounded-lg"
                  : "px-4 py-3 my-2 bg-green-400 inline-block rounded-lg"
              }
            >
              {game.rating}
            </p>
          </div>
        </div>
      </div>
      {/*card img */}
      <div>
        {/* <video
          src={gameTrailer}
          className="container"
          controls
          onMouseEnter={(e) => startPreview(game.id)}
          onMouseLeave={(e) => stopPreview()}
        ></video> */}
        <Image
          className="h-60 rounded-lg"
          src={game.background_image}
          alt={game.name}
          width={1000}
          height={1000}
        />
      </div>
      {/*card footer */}
      <div className="flex justify-center items-center">
        <button className="text-center px-4 py-2 bg-teal-700 rounded-lg my-4">
          <HoverCard>
            <HoverCardTrigger>See screenshots</HoverCardTrigger>
            <HoverCardContent className="bg-gray-800 text-white w-full">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
                {game.short_screenshots?.map((screenshot, index) => (
                  <Image
                    key={screenshot.id}
                    className="h-60 rounded-lg hover:scale-150 duration-500 "
                    src={screenshot.image}
                    alt={`Screenshot ${index + 1}`}
                    width={400}
                    height={400}
                  />
                ))}
              </div>
            </HoverCardContent>
          </HoverCard>
        </button>
      </div>
    </div>
  );
};
export default Game;
