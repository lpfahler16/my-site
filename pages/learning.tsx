import Head from "next/head";
import Nav from "../components/FullNav";

export default function Learning() {
  return (
    <div>
      <Head>
        <title>Learning</title>
        <meta name="description" content="Learn about Logan Pfahler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-darkest-gray min-h-screen overflow-hidden">
        <section className="bg-darkest-gray px-10">
          <Nav />
          <h2 className="title-lg py-2 text-lightest-gray">Learning</h2>
        </section>
      </main>
    </div>
  );
}
