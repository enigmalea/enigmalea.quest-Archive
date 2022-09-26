import React from 'react';
import styles from './styles.module.css';

type SidebarItem = {
  title: string;
  link: string;
};

const LinksList: SidebarItem[] = [
  {
    title: 'Sections',
    link: ''
  },
  {
    title: 'Vault',
    link: '/docs/Vault/intro'
  },
  {
    title: 'Dragon Age Resources',
    link: '/docs/DA/intro'
  },
  {
    title: 'Dragon Age OCs',
    link: 'https://toyhou.se/enigmalea/characters'
  },
  {
    title: 'Pages',
    link: ''
  },
  {
    title: 'Exchange Letter',
    link: '/letter'
  },
  {
    title: 'Owned Ships',
    link: '/ships'
  },
  {
    title: 'Info',
    link: ''
  },
  {
    title: 'Credits',
    link: '/credits'
  },
  {
    title: 'Update Log',
    link: '/blog'
  },
];

function SidebarList({title, link}: SidebarItem) {
  if (link === '')
  {
    return (
      <div className={styles.titles}>
      {title}
      </div>
    );
  } else { return (
    <div className={styles.link}>
    <a href={link}>{title}</a>
    </div>
  );
  };
}

export default function Sidebar(): JSX.Element {
  return (
    <div className={styles.sidebar}>
      <div className="container">
        <div className="row">
          {LinksList.map((props, idx) => (
            <SidebarList key={idx} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
}
