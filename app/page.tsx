import Games from "./Games";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="h-full bg-black">
      <Navbar />
      <Games />
    </div>
  );
}
