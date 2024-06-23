import Link from "next/link";
import CreateNewFeed from "./components/CreateNewFeed";

export default function Generate() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-white">
      <CreateNewFeed />
      <Link
        href="/"
        className="mt-6 text-blue-500 underline cursor-pointer px-4 py-2 rounded hover:bg-blue-100 transition"
      >
        View RSS Feeds
      </Link>
    </main>
  );
}
