import Head from "next/head";
import styles from "styles/Home.module.css";
import Layout from "components/Layout"
import HomeProducts from "components/HomeProducts"
import API from './api/hello'

export default function Home(props) {
  return (
    <Layout>
      <Head>
        <title>Ecommerce Coffee</title>
      </Head>
      <div className={styles.container}></div>
      <HomeProducts coffees={props.data.coffees} />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = API
  return {
    props: { data }
  }
}
