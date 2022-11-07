import Header from "@site/src/components/Header";
import Layout from "@theme/Layout";
import React from "react";
import Sidebar from "@site/src/components/Sidebar";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Main() {
	return (
		<div className={styles.main}>
			<h1>Credits</h1>
			<h2>Basics</h2>
			<ul className={styles.list}>
				<li>
					Built using <a href="http://www.docusaurus.io">Docusaurus</a>.
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
					<a href="https://neocities.org" target="_blank">
						neocities.org
					</a>
					.
				</li>
			</ul>
			<h2>Color Schemes</h2>
			<ul className={styles.list}>
				<li>
					Inpired by{" "}
					<a href="https://github.com/catppuccin/catppuccin" target="_blank">
						Catpuccin
					</a>
					. Using colors from Latte for light mode and Macchiato for dark mode.
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
					for monospace/code text.
				</li>
				<li>
					<a href="https://fontawesome.com">Font Awesome</a> for non-unicode
					icons and symbols (except AO3 logo).
				</li>
				<li>
					<strong>AO3 Font</strong> for AO3 logo by my awesome bff{" "}
					<a href="http://thefoxinboots.tumblr.com" target="_blank">
						Fox
					</a>
					.
				</li>
			</ul>
			<h2>Art</h2>
			<ul className={styles.list}>
				<li>
					<a href="https://twitter.com/enigmaleaDA/status/1536787197231255555?s=20&t=KznHSdLRPlEQLOkc7Sv6vg">
						Mascot
					</a>{" "}
					by{" "}
					<a href="https://twitter.com/KiingFluffybuns" className="twitter">
						KiingFluffybuns
					</a>
				</li>
			</ul>
		</div>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout description="Credits and assets used in making this site.">
			<Header />
			<main className={styles.page}>
				<Sidebar />
				<Main />
			</main>
		</Layout>
	);
}
