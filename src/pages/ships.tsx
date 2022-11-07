import Header from '../components/Header';
import Layout from '@theme/Layout';
import React from 'react';
import Ships from '../components/Ships';
import Sidebar from '../components/Sidebar';
import styles from "./index.module.css";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function ShipsPage() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Ships purchased from RobinBoob.">
			<Header />
			<main className={styles.page}>
				<Sidebar />
      <div className={styles.main}>
        <Ships />
       </div> 
      </main>
    </Layout>
  );
}
