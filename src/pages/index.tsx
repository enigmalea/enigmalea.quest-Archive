import Badges from "@site/src/components/Badges";
import Header from "@site/src/components/Header";
import Layout from "@theme/Layout";
import React from "react";
import { SiMyanimelist } from "react-icons/si";
import Socials from "@site/src/components/Socials";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Main() {
  return (
    <div className={styles.main}>
      <h1>Welcome!</h1>
      <p>
        Hello. Thanks for joining me in my internet home! You might be wondering
        what exactly this place is and how you got here. How you got here is
        easy: you likely clicked on a random link from one of the many social
        media sites I visit and ended up here. What this is... is a little more
        difficult.
      </p>

      <p>
        This is a personal site, my own little corner of the internet where I
        post all the stuff that I'd rather have gathered up into one area. You
        can find all my social media links here, check out my projects, find
        some tutorials, and find resources and recs for all sorts of thing.
      </p>

      <p>In short, it's a peek into my chaotic, ADD brain.</p>

      <h2>Points of Interest</h2>
      <ul className={styles.list}>
        <li>
          <strong>Pages:</strong> standalone pages featuring my projects, the
          updates blog for this site, my owned ships, and more!
        </li>
        <li>
          <strong>Digital Garden:</strong> a public knowledge bank for all
          things I find neat - coding, open source software, etc - plus a
          selection of tutorials with a focus on techy stuff in fandom.
        </li>
        <li>
          <strong>Dragon Age Resources:</strong> a collection of resources for
          the Dragon Age fandom - both ones I've found useful and ones I've
          created myself.
        </li>
        <li>
          <strong>Dragon Age OCs:</strong> my{" "}
          <a href="https://www.toyhou.se">toyhou.se</a> folder for all my Dragon
          Age characters (still massively under construction like everything
          else in my life).
        </li>
      </ul>

      <h2>Where to Find Me</h2>
      <p>
        My social media are linked in the header above and the follow me section
        below. I tend to be most active on my various Discord servers, but I
        meander to other social media sometimes. Feel free to reach out to chat
        about Dragon Age or any of my other interests at any time. I'm not great
        about keeping up with conversations, tbh, because of my ADD, but I
        really am trying to get better about it.
      </p>

      <p>
        In addition to the below socials, feel free to drop me a message or
        question on my{" "}
        <a href="https://retrospring.net/@enigmalea">retrospring</a>!
      </p>

      <h3>RSS Note</h3>
      <p>
        The RSS link in the "Follow Me" section is an aggregated RSS feed of{" "}
        <em>all</em> of my social media compiled into one feed. It pulls all of
        my updates from tumblr, dreamwidth, mastodon, calckey, and this site's
        update blog into one RSS. It's the easiest way to see <em>almost</em>{" "}
        everything I do.
      </p>

      <h3>Other Updates</h3>
      <ul className={styles.list}>
        <li>
          <a
            href="https://myanimelist.net/animelist/enigmalea"
            title="MyAnimeList"
            className={styles.MyAnimeList}
          >
            <SiMyanimelist /> Anime
          </a>
          : see the anime I'm watching, plan to watch, or have completed!
          Mirrored to Anilist. Looks best on desktop because MAL.
        </li>
        <li>
          <a
            href="https://myanimelist.net/mangalist/enigmalea"
            title="MyAnimeList"
            className={styles.MyAnimeList}
          >
            <SiMyanimelist /> Manga
          </a>
          : see the manga I'm reading, plan to read, or have completed! Mirrored
          to Anilist. Looks best on desktop because MAL.
        </li>
      </ul>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="The personal website of enigmalea.">
      <Header />
      <main className={styles.page}>
        <Main />
        <Badges />
        <Socials />
      </main>
    </Layout>
  );
}
