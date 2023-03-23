import {
  SiArchiveofourown,
  SiGithub,
  SiMastodon,
  SiMyanimelist,
  SiTumblr,
} from "react-icons/si";

import React from "react";
import styles from "./styles.module.css";

export default function Socials(): JSX.Element {
  return (
    <div className={styles.main}>
      <h2>Socials</h2>
      <div className={styles.socials}>
        <a
          href="https://ao3.org/users/enigmalea/profile"
          title="AO3"
          className={styles.socialButton}
        >
          <SiArchiveofourown />
        </a>
        <a
          href="https://enigmalea.tumblr.com"
          title="tumblr"
          className={styles.socialButton}
        >
          <SiTumblr />
        </a>
        <a
          href="https://indiepocalypse.social/@enigmalea"
          title="mastodon"
          className={styles.socialButton}
        >
          <SiMastodon />
        </a>
        <a
          href="https://github.com/enigmalea"
          title="Github"
          className={styles.socialButton}
        >
          <SiGithub />
        </a>
      </div>
    </div>
  );
}
