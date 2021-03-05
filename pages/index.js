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
      <HomeProducts
        coffees={props.products}
        offset={props.offset}
        isProductsLeft={props.isProductsLeft}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products?offset=0&limit=9")
  const data = await res.json()

  const products = data.productsSliced
  const offset = data.offset
  const isProductsLeft = data.isProductsLeft

  return {
    props: { products, offset, isProductsLeft }
  }
}
