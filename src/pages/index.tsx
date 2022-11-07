import Header from '@site/src/components/Header';
import Layout from '@theme/Layout';
import React from 'react';
import Sidebar from '@site/src/components/Sidebar';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

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

