import React from "react";
import styles from "./styles.module.css";

export default function Badges(): JSX.Element {
  return (
    <div className={styles.main}>
      <h2>Badges & Buttons</h2>
      <div className={styles.badges}>
        <img
          src="/img/badges/coffeegeek.png"
          className="normal"
          alt="coffee geek badge"
        />
        <img src="/img/badges/queer.png" className="normal" alt="queer badge" />
        <img
          src="/img/badges/fuckgender.png"
          className="normal"
          alt="fuck gender badge"
        />
        <img
          src="/img/badges/dragonage.png"
          className="normal"
          alt="dragon age badge"
        />
        <img
          src="/img/badges/magerights.png"
          className="normal"
          alt="mage rights badge"
        />
        <img
          src="/img/badges/elf.gif"
          className="normal"
          alt="elf love badge"
        />
        <a
          href="https://www.mozilla.org/en-US/firefox/new/"
          title="firefox homepage"
        >
          <img
            src="/img/badges/firefox.png"
            className="normal"
            alt="get firefox badge"
          />
        </a>
      </div>
	  <hr className={[styles.slim, styles.hide].join(" ")} />
      <div className={[styles.badges, styles.hide].join(" ")}>
        <img
          src="/img/badges/ao3-explicit.gif"
          className="normal"
          alt="I live AO3 and Explicit works button"
        />
        <img
          src="/img/badges/toebeans.gif"
          className="normal"
          alt="toe beans now! button"
        />
      </div>
    </div>
  );
}
