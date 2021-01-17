import Head from "next/head";
import styles from "styles/Home.module.css";
import Layout from "components/Layout"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ecommerce Coffee</title>
      </Head>
      <div className={styles.container}></div>
    </Layout>
  );
}
