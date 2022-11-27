import "react-spoiler-tag/dist/index.css";

import Header from "@site/src/components/Header";
import Layout from "@theme/Layout";
import React from "react";
import { Spoiler } from "react-spoiler-tag";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Main() {
	return (
		<div className={styles.main}>
			<h1>Dear Creator</h1>
			<p>
				Thanks so much for taking some time to read my letter to get a better
				feel for things I like and don't like. This is my general info, but more
				specifics of what I'm looking for are usually included with my prompts
				during sign-up. If you have questions please feel free to send me{" "}
				<a href="https://enigmalea.tumblr.com/ask">an anon ask on tumblr</a>.
			</p>
			<p>
				You can also find the link to my tumblr, twitter, and AO3 in the
				navbar/menu above. For OC info, please check out the link to my Dragon
				Age OCs; please note my OC list is very incomplete and under
				construction, so for ships which contain OCs I'm <u>always</u> okay with
				receiving fics and art with your OCS, default characters, or my own OCs.
				The choice is yours.
			</p>
			<p>
				I'm also never set on any prompts listed in or provided with my sign-up
				they're only there to help you get started if you're having trouble.
			</p>
			<p className="text--center">Happy creating!</p>
			<p className="text--center">
				<a href="#likes" className={styles.likes}>
					Likes
				</a>{" "}
				☆{" "}
				<a href="#dnw" className={styles.dnw}>
					Do Not Wants
				</a>
			</p>
			<section className={styles.likes}>
				<a id="likes"></a>
				<h2 className={styles.likes}>Likes</h2>
				<p>
					Below are a few tags I find myself looking for often, or things I'm
					interested in seeing. These are in no way exclusive or exhaustive. If
					it's not a DNW I'm still interested in reading it.
				</p>

				<p>
					<strong>General:</strong> angst with a happy ending, angst and smut,
					smut, fluff, positive/healthy polyamory, Third Person POV (occasional
					First Person POV), Fade sex.
				</p>

				<p>
					<strong>AUs:</strong> Modern Thedas, Modern w/ Magic, Coffee Shop,
					College, Historical (Regency or other time period), vampire AUs,
					werewolf AUs, steampunk, cyberpunk... honestly, any AU where Thedosian
					characters aren't all human/live without magic.
				</p>

				<p>
					<strong>Tropes:</strong> Gay/bisexual panic (aka the "<em>oh</em>"
					moment), "only one bed", pretend dating, arranged marriage where they
					fall for each other, one-sided pining, idiots to lovers, enemies to
					lovers, friends to lovers, roomates, accidental polyamory, intentional
					polyamory with negotiations.
				</p>

				<p>
					<strong>Smut/Kinks:</strong>{" "}
					<Spoiler
						text="BDSM, edging, restraints, blindfolds, collars, nipple play, anal play, pegging,
        frottage/outercourse, intercrural sex, oral sex, deep throating, face fucking, biting/marking, rough sex, praise
        kinks, impact play, shibari, temp play, double penetration, spit-roasting, breath play, semi-public sex,
        voyeurism/exhibitionism, sexting/cybersex/phone sex, multiple orgasms, power bottoms/bottom Doms, after care."
						hiddenColor="var(--ifm-font-color-base)"
						revealedColor="transparent"
					/>
				</p>

				<p>
					<strong>Specific Characters:</strong>{" "}
					<em>
						I particularly enjoy characters in these roles, but I'm not set on
						them.
					</em>{" "}
					<Spoiler
						text="Bottom Iron Bull, sub Iron Bull, dominent/Dom bottom Anders, sub Solas."
						hiddenColor="var(--ifm-font-color-base)"
						revealedColor="transparent"
					/>
				</p>

				<p>
					<strong>Art Prefs:</strong> I enjoy a wide variety of styles. I tend
					to lean toward enjoying AUs for art and soft, domestic fluff. Smutty
					art is always welcome. Feel free to illustrate anything from{" "}
					<a href="https://archiveofourown.org/users/enigmalea/works">
						my works
					</a>{" "}
					that fit the theme of the exchange (if any) and that inspires you. I
					really like visual storytelling and comics if that's more your style.
				</p>

				<p>
					I recently started collecting{" "}
					<a href="https://raindrop.io/enigmalea/art-prompts-27576487/theme=auto">
						palette challenges and pose references for artists
					</a>{" "}
					who are looking for something different as inspiration. My particular
					faves are noted, but feel free to use any of the palettes or poses to
					start.
				</p>

				<p>
					<strong>Other Prefs:</strong> I enjoy pretty much all fan content -
					photo manips, rotoscopes, playlists, podfic. As with art above, feel
					free to base gifts on my own content if you'd like, or do something
					completely original. Graphics meant to mimic found documents (field
					notes, journals, etc) and other ephemera (letters, notes, etc) are a
					particular fave.
				</p>
			</section>
			<section className={styles.dnw}>
				<a id="dnw" className={styles.dnw}></a>
				<h2 className={styles.dnw}>Do Not Wants</h2>
				<h3 className={styles.dnw}>DNW to Receive Under Any Circumstances</h3>
				<p>
					<strong>General:</strong> Character/Reader (or Second Person),
					character bashing, non-canonical major character death, abuse (mental,
					emotional, or physical).
				</p>

				<p>
					<strong>AUs:</strong> AUs where everyone is human or where there is no
					magic (or at least some type of abilities. I'm okay if... for example
					magic is swapped for Biotics or psychic abilities or something).
					Anything too rooted in the real world. It doesn't bother me for a WWII
					AU to mention actual battles or real world cities, but if that's
					happening I wanna hear about how mages are being used instead of
					infantry and medics are called healers... if that makes sense.
					Omegaverse.
				</p>

				<p>
					<strong>Tropes:</strong> genderbending, racebending, mpreg, cheating,
					forced relationships (including coercion; arranged marriages are
					okay), forced pregnancy, anything that focuses too much on "breeding"
					as an ultimate goal.
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
					<strong>Specific Ships/Characters:</strong>{" "}
					<em>Please avoid these ships, even as side mentions:</em> Colemance,
					Sera/Adaar, Sera/Lavellan.
					<br />
					<em>
						Please do not focus on the following characters (casual mentions &
						minor appearances are okay):
					</em>{" "}
					Aveline, Isabela.
					<br />
					<em>Character Specific DNW:</em> Please do not nickname Anders "Andy".
				</p>
			</section>
			<section className={styles.cdnw}>
				<h3 className={styles.cdnw}>Conditional DNWs</h3>
				<p>
					<em>
						Please proceed cautiously with the below tropes/topics. In some
						circumstances these things are fine, but in others they bother me.
						If you have any questions please feel free to reach out to me via
						anon ask. I can always talk about things that bother/squick/trigger
						me without issues.
					</em>
				</p>
				<p>
					<strong>Tranquil Mage, Red Lyrium Corruption:</strong> Both of these
					particularly if done as punishment or only to explore the angst
					inflicted <u>on other characters</u>; I'm okay if it ends in a happy
					ending or the person is somehow cured of Tranquility/Corruption. I'm
					also okay to see canonically Tranquil/Corrupted characters or to have
					Tranquil/Corrupted characters play a part in a fic. (i.e. you can
					write about Redcliffe's red lyrium future, or Samson, but please don't
					"punish" a character who isn't corrupted with red lyrium in canon by
					giving them red lyrium.)
				</p>
				<p>
					<strong>Invasion of Privacy:</strong> Invasion of privacy as a joke/to
					embarrass someone or to "catch" someone cheating always bother me, as
					does parents snooping on their children; however, accidental instances
					or investigations of legitimate concerns don't bother me. Examples of
					okay: accidentally seeing a text message, email, bit of a journal
					entry because it's there, investigating someone's past because you
					suspect they're a spy/putting people in danger. Not okay: breaking
					into someone's phone because you think they're cheating, accessing
					someone's email to find out who they're dating, reading someone's
					journal to find out who they were with because they aren't "allowed"
					to be friends with someone.
				</p>
			</section>
		</div>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`exchange letter`}
			description="enigmalea's Dear Creator letter for fanwork exchanges."
		>
			<Header />
			<main className={styles.page}>
				<Main />
			</main>
		</Layout>
	);
}
