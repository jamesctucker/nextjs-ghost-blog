import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Some potentially interesting facts about James."
        />
      </Head>
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
  );
}
