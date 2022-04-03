import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Header from '@site/src/components/Header';
import Sidebar from '@site/src/components/Sidebar';

function Main() {
return (
<div className={styles.main}>
  <h1>Welcome!</h1>
  <p>This site is a personal website intended to house all the various things I do, obsess over, or just think are neat.
    I hope to update it semi-regularly, and right now it's still under major contruction.</p>

  <h2>Where to Find Things</h2>
  <ul className={styles.list}>
    <li><strong>The Vault:</strong> a public wiki (notebook) for all the things I find neat - info & resources on Dragon
      Age, coding, open source software, diy projects, etc. Added to randomly as I get the urge.</li>
    <li><strong>Dragon Age OCs:</strong> my <a href="http://www.toyhou.se">toyhou.se</a> folder for all my Dragon Age
      characters (still massively under construction like everything else in my life).</li>
  </ul>

  <h2>What Doesn't Work</h2>
  <ul className={styles.list}>
    <li> The self-hosted blog link in the top navbar/menu (represented by the pencil) still has the default entries from
      Docusaurus. I know I want to use the self-hosted blog, but I'm not quite sure what I'll use it for yet!</li>
  </ul>
</div>
);
}

export default function Home(): JSX.Element {
const {siteConfig} = useDocusaurusContext();
return (
<Layout title={`home`} description="The personal website of enigmalea.">
  <Header />
  <main className={styles.page}>
    <Sidebar />
    <Main />
  </main>
</Layout>
);
}

