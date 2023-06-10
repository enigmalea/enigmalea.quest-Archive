import Masonry from "react-masonry-css";
import React from "react";
import styles from "./styles.module.css";

type ListItem = {
  id: number;
  name: string;
  image: string;
  alt: string;
  description: string;
  link: string;
};

let items: ListItem[] = [
  {
    id: 1,
    name: "The Fujoshi Guide to Web Development",
    image: "/img/projects/fujoguide.png",
    alt: "The character roster for The Fujoshi Guide to Web Development. The title is located near the bottom of the graphic in aqua, orange, and pink text surrounded by a lavender bubble. Pink hearts bubble up from the word ‘web’ in the title. The word ‘to’ is framed by a terminal. On the left side of the title is a stylized computer screen showing an image of Boba-tan, the BobaBoard Mascot, wearing a raccoon kigurumi, glasses, and waving in greeting. The background shows six characters that represent from left to right: Git, GitHub, Terminal, CSS, HTML, and ARIA. The background colors form a rainbow. On the bottom right is a green circle with the Kickstarter logo and the 'project we love' text.",
    description:
      "The Fujoshi Guide to Web Development is a series of zines/books featuring anthropomorphized versions of programming languages and concepts (aka gijinka), each one engineered from the ground up to cater to transformational fandom (that is, people who create fanfictions, fanarts, meta, and much more), and their sensibilities and interests.",
    link: "https://www.fujoweb.dev/",
  },
  { 
		id: 2,
		name: "Archivist",
		image: "/img/projects/archivist.png",
		alt: "The Archivist logo. A portion of the dark red AO3 logo, which has been cropped so that the 'O' looks like a face with arms raised in celebration. A set of gray cat-eye glasses and an antenna have been added to make it look like a nerdy robot.",
		description: "A Discord bot which takes archiveofourown.org links, scrapes information, and returns the info in an embed to Discord. A great way to share fics, user profiles, and more with friends!",
		link: "https://archivistbot.com/"
	},
  { 
		id: 3,
		name: "Dragon Age Polyshipping",
		image: "/img/projects/dapoly.png",
		alt: "A Dragon Age dragon silhouette featuring the head and wings of the dragon. The top part is dark navy, and it fades into a bright pink. The bottom third of the image is light blue silhouettes of the Dragon Age cast all hugging as if they are one large polycule.The colors are from one version of the polyamory flag. In the center of the image is a white heart with an infinity symbol - it is in the Dragon Age stained glass style, with shining light coming from it. The whole image is on a transparent background.",
		description: "A celebration of polyamorous ships in the Dragon Age fandom featuring year round tumblr reblogs of polyamory content, and a yearly fanworks exchange!",
		link: "https://dapolyshipping.neocities.org/"
	},
  { 
		id: 4,
		name: "Arlathan eXchange",
		image: "/img/projects/arlathan.png",
		alt: "In the center of the image is a floating island with a dark purple silhouette; a large castle with pointed spires is in the middle, and it floats in the air, surrounded by fog. In front of that are dark silhouettes of leaves and grass, which act as a frame. The bottom right of the frame has a statue of Fen'Harel in the same dark silhouette; its eyes glow a bright, eerie green. Behind the island we see mountains moving from a dark teal in the foreground, to a purple gray far in the back. The sky is a blue to white to peach gradient, recalling a sunset or sunrise. In the white of the sky, in large golden text is 'Arlathan eXchange' in a script decorated with leaves.",
		description: "Arlathan Exchange is a yearly fanwork exchange hosted on AO3. It is celebration of Elvhen characters and is open to gen fic, ships, or solo/introspective pieces. Sign-ups are open to all fancreators willing to create a new fanfic or fanart piece within the deadline.",
		link: "https://arlathanxchange.neocities.org/"
	},
	{ 
		id: 5,
		name: "Dragon Age Annual",
		image: "/img/projects/daa.jpg",
		alt: "The cover for the 2023 Dragon Age Annual. The background is a greenish hued landscape, featuring an ethereal ghostly griffin. Behind the griffin in silhouette are floating nugs. On the right side, overlaying the background is a golden cutout of shrubs and branches featuring a halla who's horns blend into the branches above. In front of the halla in black text is 'Dragon Age Annual 2023' and beneath that in green text is 'Paws & Pauldrons'.",
		description: "Dragon Age Annual is a fan-run not-for-profit project which creates a yearly calendar (12 Months + 5 Bonus Pages + cover) with a theme from Dragon Age theme. It features the work of fan artists and writers, as well as a team of graphic designers and betas.",
		link: "https://dragonageannual.art"
	},
];

let projects = items.map(function (item) {
  return (
    <div className="card-demo">
      <div className="card">
        <div className="card__image">
          <img src={item.image} alt={item.alt} />
        </div>
        <div className="card__body">
          <h2 className={styles.cardHeader}>{item.name}</h2>
          {item.description}
        </div>
        <div className="card__footer">
          <a href={item.link} className="button button--primary button--block">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
});

const breakpointColumnsObj = {
  default: 4,
  1950: 3,
  1520: 2,
  1010: 1
};

export default function Projects(): JSX.Element {
  return (
    <div className={styles.Projects}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.myMasonryGrid}
        columnClassName={styles.myMasonryGridColumn}
      >
        {projects}
      </Masonry>
    </div>
  );
}
