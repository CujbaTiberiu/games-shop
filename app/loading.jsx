import { Skeleton } from "../components/ui/skeleton";

export default function Loading() {
  return (
    <main className="bg-black grid gap-16 grid-cols-fluid xl:grid-cols-4 p-6">
      {/*card title */}
      {Array.from({ length: 20 }, (_, i) => i + 1).map((id) => (
        <div key={id} className="bg-slate-200 h-96 rounded-lg">
          <Skeleton className="bg-slate-400 p-4 w-1/2 mt-4 mx-auto"></Skeleton>
          <Skeleton className="py-6 bg-slate-400 mt-4 mx-2"></Skeleton>
          <Skeleton className="h-44 bg-slate-400 mt-4 mx-4"></Skeleton>
          <Skeleton className="py-6 bg-slate-400 mt-4 w-1/3 mx-auto"></Skeleton>
        </div>
      ))}
    </main>
  );
}
