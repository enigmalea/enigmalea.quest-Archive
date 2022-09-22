import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Ships from '../components/Ships';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from "./index.module.css";

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
