import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

type ShipsItem = {
	title: string;
	// ao3_tag: string;
	// details: JSX.Element;
	img: string;
};

const ShipsList: ShipsItem[] = [
	{
		title: "The Bois",
		// ao3_tag: "https://archiveofourown.org/tag_sets/7219",
		img: "/img/ships/thebois.png",
		// details: <>Some stuff about the ship.</>,
	},
	{
		title: "Iron Lion",
		// ao3_tag: "https://archiveofourown.org/tag_sets/7219",
		img: "/img/ships/ironlion.png",
		// details: <>Some stuff about the ship.</>,
	},
	{
		title: "Bruno/Leone",
		// ao3_tag: "https://archiveofourown.org/tag_sets/7219",
		img: "/img/ships/brunoabacchio.png",
		// details: <>Some stuff about the ship.</>,
	},
	{
		title: "Zuko/Sokka",
		// ao3_tag: "https://archiveofourown.org/tag_sets/7219",
		img: "/img/ships/zukka.png",
		// details: <>Some stuff about the ship.</>,
	},
];

function Ship({ title, ao3_tag, img, details }: ShipsItem) {
	return (
		<div className="card">
			<div className="card__image">
				<img className={styles.preview} src={img} />
			</div>
			<div className="card__body">
				<h4>{title}</h4>
				{/* <small>{details}</small> */}
			</div>
			{/* <div className="card__footer">
					<Link
						className={clsx(
							"button button--secondary button--block ao3",
							styles.nounderline,
							styles.responsive
						)}
						to={ao3_tag}
					>
						tag
					</Link>
				</div> */}
		</div>
	);
}

export default function Ships(): JSX.Element {
	return (
		<section>
			<p>Below are the ships I've purchased from{" "}
			<a href="https://robinboob.herokuapp.com">Robinboob</a>. They're mine and
			only mine*!
			</p>
			<p>
				<small>
					*This is a joke, but robinboob isn't. Check it out to get your own ship
					certificates and support an effort to make the internet a better place
					for fandom.
				</small>
			</p>
			<div className={styles.ships}>
				{ShipsList.map((props, idx) => (
					<Ship key={idx} {...props} />
				))}
			</div>
		</section>
	);
}
