import Header from "@site/src/components/Header";
import Layout from "@theme/Layout";
import React from "react";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Main() {
  return (
    <div className={styles.main}>
      <h1>Credits</h1>
      <h2>Basics</h2>
      <ul className={styles.list}>
        <li>
          Built using <a href="https://www.docusaurus.io">Docusaurus</a>.
          <p className={styles.explain}>
            <em>But enig,</em> you say,{" "}
            <em>Docusaurus isn't for personal webpages.</em> Not only do I say,{" "}
            <em>Why not?</em> to that but also <em>You can't stop me.</em> I'm a
            baby coder and not quite ready to build my entire environment from
            scratch, and Docusaurus gives me a basic tool to beat into
            submission into what I want. It comes with the fancy code I can use
            to self-host a blog and a personal knowledge bank while I mess
            around trying to learn Javascript and React. It's a win/win!
          </p>
        </li>
        <li>
          Hosted by{" "}
          <a href="https://netlify.com" target="_blank">
            netlify
          </a>
          .
        </li>
      </ul>
      <h2>Color Schemes</h2>
      <ul className={styles.list}>
        <li>
          Inspired by{" "}
          <a href="https://github.com/catppuccin/catppuccin" target="_blank">
            Catpuccin
          </a>
          . I'm using colors from Latte for light mode and Macchiato for dark
          mode.
        </li>
      </ul>
      <h2>Fonts</h2>
      <ul className={styles.list}>
        <li>
          Google
          <ul className={styles.list2}>
            <li>
              <a
                href="https://fonts.google.com/specimen/Unica+One"
                target="_blank"
              >
                Unica One
              </a>{" "}
              for "enigmalea" header.
            </li>
            <li>
              <a
                href="https://fonts.google.com/specimen/Comfortaa"
                target="_blank"
              >
                Comfortaa
              </a>{" "}
              for body text.
            </li>
          </ul>
        </li>
        <li>
          <a href="https://rubjo.github.io/victor-mono/" target="_blank">
            Victor Mono
          </a>{" "}
          for header, monospace, and code text.
        </li>
        <li>
          <a href="https://fontawesome.com">Font Awesome</a> for non-unicode
          icons and symbols (except AO3 logo).
        </li>
        <li>
          AO3 Font for AO3 logo by my awesome bff{" "}
          <a href="https://thefoxinboots.tumblr.com" target="_blank">
            Fox
          </a>
          .
        </li>
      </ul>
      <h2>Art</h2>
      <ul className={styles.list}>
        <li>
          Mascot by{" "}
          <a href="https://ko-fi.com/KiingFluffybuns">KiingFluffybuns</a>
        </li>
      </ul>
      <h2>Badges & Buttons</h2>
      <ul className={styles.list}>
        <li>
          Coffee Geek, Fuck Gender, Elf Love, and Get Firefox badges from{" "}
          <a href="https://web.badges.world/#">Web Badges World</a>
        </li>
        <li>
          Queer badge from{" "}
          <a href="https://pixels.heylouise.space/">Elfwink's Pixels</a>
        </li>
        <li>
          AO3 Explicit button from{" "}
          <a href="https://dldr.xyz/web">bloodwrites</a>
        </li>
      </ul>
      <h2>Cool Packages & Components</h2>
      <p>
        <em>
          These packages and components have all been added to the base
          Docusaurus to do something cool. They should all be compatible with
          Docusaurus and other React-based frameworks (at the very least). Check
          'em out.
        </em>
      </p>
      <ul className={styles.list}>
        <li>
          <a href="https://github.com/gabrielcsapo/docusaurus-plugin-image-zoom">
            docusaurus-plugin-image-zoom
          </a>
          <p className={styles.explain}>
            Allows you to zoom into standalone images lightbox-style in the
            Digital Garden and resources section of the site.
          </p>
        </li>
        <li>
          <a href="https://github.com/sachinchoolur/lightGallery">
            lightGallery
          </a>
          <p className={styles.explain}>
            Image Gallery used for <a href="/ships">Owned Ships</a> page.
          </p>
        </li>
        <li>
          <a href="https://github.com/react-icons/react-icons">React Icons</a>
          <p className={styles.explain}>
            There's... there's so many icons here. All the icons, ready to use
            for react projects. Primarily used for social and other icons on
            pages and in sections.
          </p>
        </li>
        <li>
          <a href="https://github.com/dazulu/react-spoiler-tag">
            React Spoiler Tag
          </a>
          <p className={styles.explain}>
            Used to create clickable spoiler text. Used on my exchange letter
            and author's note to talk kink so people can view the page in a
            setting where they wouldn't be able to normally.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`credits`}
      description="Credits and assets used in making this site."
    >
      <Header />
      <main className={styles.page}>
        <Main />
      </main>
    </Layout>
  );
}
