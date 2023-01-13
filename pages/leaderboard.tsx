import Head from "next/head";
import { Leaderboard } from "../components/stack/FullStack";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";

export default function Stack() {
  return (
    <div>
      <Head>
        <title>Stack</title>
        <meta name="description" content="Learn about Logan Pfahler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-darkest-gray min-h-screen overflow-hidden">
        <section className="bg-darkest-gray px-10">
          <div className="max-w-xl m-auto p-8">
            <Link href={"/stack"}>
              <MdArrowBack className="absolute top-4 right-4 text-lightest-gray text-5xl" />
            </Link>
            <p className="text-2xl text-lightest-gray py-4">Leaderboard</p>
            <Leaderboard />
          </div>
        </section>
      </main>
    </div>
  );
}
