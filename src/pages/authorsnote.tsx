import Header from "@site/src/components/Header";
import Layout from "@theme/Layout";
import React from "react";
import { Spoiler } from "react-spoiler-tag";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Main() {
	return (
		<div className={styles.main}>
			<h1>Authors Note</h1>
			<p>
				If you found your way here, you've probably wandered in from AO3 by
				clicking the link on my author's note. Thank you so much for being
				interested enough in my fics that you wanted to see updates. Below you
				can find my social links, prompt info, and general info on my fics.
			</p>

			<h2>Discord</h2>
			<p>
				Join Me At:{" "}
				<a href="https://discord.gg/9RERC6R" rel="nofollow">
					The Hanged Man
				</a>
			</p>
			<p>
				Although I did start this discord it's not for my "fans", but is a place
				for <strong>any 18+ DA fan</strong> to talk about and share their
				fanfic, find a beta, or offer to beta, or just ravenously consume as
				much fanfic as they possibly can. We welcome all readers, writers, and
				betas to join us!
			</p>
			<p>
				We also welcome fanartists to join us for prompts, events, and
				inspiration.
			</p>

			<h2>Other Social Media</h2>
			<p>
				You can get updates about my fics by following me on any of the sites
				below. I'm not super active on social media, but I do try to post when I
				have a new fic or chapter. Links are listed in the most-to-least
				frequency of use.
			</p>
			<ul className={styles.list}>
				<li>
					<a
						href="https://archiveofourown.org/users/enigmalea/profile"
						rel="nofollow"
					>
						ao3
					</a>{" "}
					(click subscribe)
				</li>
				<li>
					<a href="https://enigmalea.tumblr.com" rel="nofollow">
						tumblr
					</a>
				</li>
				<li>
					<a href="https://indiepocalypse.social/@enigmalea" rel="nofollow">
						mastodon
					</a>
				</li>
				<li>
					<a href="https://www.pillowfort.social/enigmalea" rel="nofollow">
						pillowfort
					</a>
				</li>
				<li>
					<a href="https://enigmalea.dreamwidth.org" rel="nofollow">
						dreamwidth
					</a>
				</li>
			</ul>
			<a id="prompt"></a>
			<h2>Prompt Me</h2>
			<p style={{ textAlign: "center" }}>
				<a href="https://enigmalea.tumblr.com/ask" rel="nofollow">
					submit
				</a>{" "}
				☆{" "}
				<a
					href="https://enigmalea.tumblr.com/tagged/my-drabbles"
					rel="nofollow"
				>
					read on tumblr
				</a>{" "}
				☆{" "}
				<a
					href="https://archiveofourown.org/collections/frillycakes"
					rel="nofollow"
				>
					read on ao3
				</a>
			</p>
			<p>
				I'm open to receiving prompts for short fics and drabbles. Prompts can
				be centered around my existing fics or requests for something totally
				new! What I will write far outweighs what I won't. Please read the below
				items carefully.
			</p>
			<h4 className={styles.dnw}>
				I reserve the right to refuse any prompt which makes me uncomfortable.
			</h4>
			<p>
				Expicit prompts are posted directly to AO3, pillowfort, and dreamwidth
				only; non-explicit prompts are crossposted in full as long as the fic is
				under 1,000 words.
			</p>
			<h3>What I Write</h3>
			<ul className={styles.list}>
				<li>
					<strong>Fandoms:</strong> Dragon Age! I could also write for:
					Castlevania (Netflix), Our Flag Means Death, Torchwood, and Doctor
					Who.
				</li>
				<li>
					<strong>Ratings:</strong> Any
				</li>
				<li>
					<strong>Ships:</strong> Primarily slash or het for Explicit, but I'm
					not opposed to attempting explicit femslash.
				</li>
			</ul>
			<p>
				<details className={styles.an}>
					<summary className={styles.an}>Absolutely No</summary>
					<p>
						<strong>General:</strong> Character/Reader (or Second Person),
						character bashing, non-canonical major character death, abuse
						(mental, emotional, or physical).
					</p>
					<p>
						<strong>AUs:</strong> AUs where everyone is human or where there is
						no magic. Omegaverse.
					</p>
					<p>
						<strong>Tropes:</strong> genderbending, racebending, mpreg,
						cheating, forced relationships (including coercion; arranged
						marriages are okay), forced pregnancy, anything that focuses too
						much on "breeding" as an ultimate goal.
					</p>
					<p>
						<strong>Smut/Kinks:</strong>{" "}
						<Spoiler
							text="noncon (consensual non-consent okay), dubcon with alcohol/drug use (i.e. they get drunk
            and have sex without consent being established ahead of time. dub-con due to secrets/hidden identities is
            fine.), adult/minor, fisting, bodily waste products (blood play is fine), sounding, incest, humiliation
            (impact play or other punishments are okay, but verbal humiliation is not okay), ageplay (DD/lg), raceplay,
            A/B/O (knotting okay), tentacles, other monsters than those in my likes, oviposition, vore, bestiality"
							hiddenColor="var(--ifm-font-color-base)"
							revealedColor="transparent"
						/>
					</p>
					<p>
						<strong>Ships:</strong> Colemance, Sera/Adaar, Sera/Lavellan.
					</p>
					<strong>Characters:</strong> <em>(as a main focus)</em> Aveline,
					Isabela.
				</details>
			</p>
			<h3>How To Prompt</h3>
			<p>
				<a href="https://enigmalea.tumblr.com/ask" rel="nofollow">
					Submit
				</a>{" "}
				to my tumblr ask by leaving me a message with:
				<pre>
					<code>
						<strong>
							Username to be tagged (tumblr/twitter/pillowfort) or gifted (AO3):
						</strong>
						<br />
						<strong>Preferred Rating:</strong>
						<br />
						<strong>Pairing:</strong> (if any)
						<br />
						<strong>Special Circumstances:</strong> (AU, Modern AU, None?)
						<br />
						<strong>Premise:</strong> (be as detailed or vague as you want but
						please no super complex storylines since I’m trying to contain it to
						one-shots)
					</code>
				</pre>
				Anon is always on so you can prompt me even if you don't have a tumblr
				account.
			</p>
		</div>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`author's note`}
			description="Author's notes for enigmalea's AO3 fics."
		>
			<Header />
			<main className={styles.page}>
				<Main />
			</main>
		</Layout>
	);
}
