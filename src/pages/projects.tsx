import Header from "@site/src/components/Header";
import Layout from "@theme/Layout";
import Projects from "@site/src/components/Projects";
import React from "react";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function About(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`projects`} description="Check out enigmalea's projects!">
      <Header />
      <Projects />
    </Layout>
  );
}
