import Head from "next/head";
import styles from "styles/Home.module.css";
import Layout from "components/Layout"
import HomeProducts from "components/HomeProducts"

export default function Home(props) {
  return (
    <Layout>
      <Head>
        <title>Ecommerce Coffee</title>
      </Head>
      <div className={styles.container}></div>
      <HomeProducts coffees={props.firstNine} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/hello")
  const data = await res.json()
  const firstNine = await data.slice(0,9)

  return {
    props: { firstNine }
  }
}
