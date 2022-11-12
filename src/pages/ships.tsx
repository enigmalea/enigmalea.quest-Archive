import Header from "../components/Header";
import Layout from "@theme/Layout";
import React from "react";
import Ships from "../components/Ships";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function ShipsPage() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={`owned ships`} description="Ships purchased from RobinBoob.">
			<Header />
			<main className={styles.page}>
				<div className={styles.main}>
					<Ships />
				</div>
			</main>
		</Layout>
	);
}
