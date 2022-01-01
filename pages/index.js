import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          <Link className="text-blue-600" href="/v60">
            <a>Make a v60</a>
          </Link>
        </h1>
      </main>
    </>
  );
}
