/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import profilePic from "../static/images/avatar.jpg";

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
      <Image
        src={profilePic}
        alt="A headshot of James holding his fluffy dog and standing in front of an orange Honda Element"
        width={75}
        height={100}
        placeholder="blur"
        layout="responsive"
        objectFit="cover"
        className="rounded-md"
      />
      <p>
        I'm a husband, dog dad, plant lover, outdoor explorer, and software
        engineer based out of Minneapolis. I wish I could call myself a writer,
        but I don't count myself worthy of that since I write so rarely.
      </p>
      <p>
        Before my career in tech, I dabbled in quite a few other areas. I
        studied to be a pastor in undergrad, worked in a factory, and sold
        insurance. You can learn more about my non-traditional path into tech by
        listening to this{" "}
        <a href="https://develomentor.com/2020/11/02/james-tucker-theology-major-becomes-software-developer-105/">
          Develomentor podcast
        </a>
        .
      </p>
      <p>
        In the short time I've been a developer (got my start in 2019!), I've
        been lucky to have worked at two incredible companies. My first role was
        at <a href="https://soona.co">soona</a>, a Series-A-raising startup
        where I helped build out the foundational software. And now you can find
        me at <a href="https://mainstreet.com">MainStreet</a>, where I'm working
        on projects like helping small businesses take advantage of government
        tax credits. If you want to accelerate your growth, my top
        recommendation is to work at a rocket ship (one that you've vetted
        carefully, of course).
      </p>
      <p>
        When I'm not making things with code, you can usually find me exploring
        the outdoors with my wife Megan and our dog daughter Solveig (she's the
        one who looks like a tiny bear in the above photo).
      </p>
    </div>
  );
}
