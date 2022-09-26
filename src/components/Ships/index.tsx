import React from "react";
import clsx from "clsx";
import LightGallery from "lightgallery/react";
import styles from "./styles.module.css";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

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

// function Ship({ title, ao3_tag, img, details }: ShipsItem) {
// 	return (
// 		<div className="card">
// 			<div className="card__image">
// 				<LightGallery  plugins={[lgMediumZoom]}>
// 					<figure
// 						lg-background-color="white"
// 						className="blog-images"
// 						data-src={img}
// 						data-lg-size="1600-1126"
// 					>
// 						<img src={img} />
// 					</figure>
// 				</LightGallery>
// 			</div>
// 			<div className="card__body">
// 				<h4>{title}</h4>
// 				{/* <small>{details}</small> */}
// 			</div>
// 			{/* <div className="card__footer">
// 					<Link
// 						className={clsx(
// 							"button button--secondary button--block ao3",
// 							styles.nounderline,
// 							styles.responsive
// 						)}
// 						to={ao3_tag}
// 					>
// 						tag
// 					</Link>
// 				</div> */}
// 		</div>
// 	);
// }

export default function Ships(): JSX.Element {
	return (
		<div className={styles.ship}>
			<p>
				Below are the ships I've purchased from{" "}
				<a href="https://robinboob.herokuapp.com">Robinboob</a>. They're mine
				and only mine*!
			</p>
			<p>
				<small>
					*This is a joke, but robinboob isn't. Check it out to get your own
					ship certificates and support an effort to make the internet a better
					place for fandom.
				</small>
			</p>
			<LightGallery
				speed={500}
				download={false}
				alignThumbnails="middle"
				plugins={[lgThumbnail, lgZoom]}
			>
				<a
					href="/img/ships/thebois.png"
					data-sub-html="<h4>Dragon Age</h4><h3>The Bois</h3><em>art by <a href='https://thefoxinboots.tumblr.com'>thefoxinboots</a></em>"
				>
					<img
						alt="Dragon Age: The Bois"
						src="/img/ships/thebois.png"
						className={styles.preview}
					/>
				</a>
				<a href="/img/ships/ironlion.png" data-sub-html="<h4>Dragon Age</h4><h3>Iron Lion</h3>">
					<img
						alt="Dragon Age: Iron Lion"
						src="/img/ships/ironlion.png"
						className={styles.preview}
					/>
				</a>
				<a href="/img/ships/brunoabacchio.png" data-sub-html="<h4>Jojo's Bizarre Adventures</h4><h3>Bruno/Abacchio</h3>">
					<img
						alt="Jojo's Bizarre Adventures: Bruno/Abacchio"
						src="/img/ships/brunoabacchio.png"
						className={styles.preview}
					/>
				</a>
				<a href="/img/ships/zukka.png" data-sub-html="<h4>Avatar: The Last Airbender</h4><h3>Zukka</h3>">
					<img
						alt="Avatar: The Last Airbender: Zukka"
						src="/img/ships/zukka.png"
						className={styles.preview}
					/>
				</a>
			</LightGallery>
		</div>
	);
}
