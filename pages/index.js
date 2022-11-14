import React from "react";
import Header from "../components/Containers/Header";
import styles from "../styles/Home.module.css";
import Head from "next/head";
//adding components
import SearchBox from "../components/Search-Box";
import CatCard from "../components/Cat-Card/Cat-Card";
//adding images
import lam from "../public/assets/lam.jpg";
import ferrary from "../public/assets/ferrary.jpg";
import humdai from "../public/assets/humdai.jpg";
import benz from "../public/assets/enz.jpg";
import bmw from "../public/assets/bmw.jpg";

const index = () => {
  return (
    <>
      <Head>
        <title>خودرویاب | به راحتی خودرو اجاره کن</title>
        <meta name="description" content="Hi"></meta>
      </Head>
      <Header />
      <main className="md:mt-4 sm:mt-1">
        <section className={styles.searchContainer}>
          <div className="container mx-auto grid  sm:grid-cols-1  md:grid-cols-2 py-20">
            <div className="container mx-auto ">
              <SearchBox />
            </div>
            <div></div>
          </div>
        </section>

        <section className="container mx-auto mb-4 sm:container sm:mx-auto">
          <h2 className=" text-xl"> معروف ترین برند ها </h2>

          <row className="grid md:grid-cols-5 sm:grid-cols-2 mt-3">
            <CatCard image={lam} text="لامبورگینی" />
            <CatCard image={ferrary} text="فـراری" />
            <CatCard image={humdai} text="هیوندای" />
            <CatCard image={benz} text="بــنز" />
            <CatCard image={bmw} text="بی ام وِ" />
          </row>
        </section>

        <section className="container mx-auto mb-4 sm:container sm:mx-auto mt-12">
          <h2 className=" text-xl">آگهی های اجاره</h2>
        </section>
      </main>
    </>
  );
};

export default index;
