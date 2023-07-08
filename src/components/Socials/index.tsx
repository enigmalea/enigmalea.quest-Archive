import {
  SiArchiveofourown,
  SiGithub,
  SiMastodon,
  SiTumblr,
} from "react-icons/si";

import { HiMiniRss } from "react-icons/hi2";
import React from "react";
import styles from "./styles.module.css";

export default function Socials(): JSX.Element {
  return (
    <div className={styles.main}>
      <h2>Follow Me</h2>
      <div className={styles.socials}>
        <a
          href="https://zapier.com/engine/rss/4727282/enigmalea"
          title="RSS"
          className={styles.socialButton}
        >
          <HiMiniRss />
        </a>
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
