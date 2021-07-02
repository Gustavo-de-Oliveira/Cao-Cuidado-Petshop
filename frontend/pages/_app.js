/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import '../src/theme/GlobalStyle.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import { ProductsCartProvider } from '../src/context/productsCart';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProductsCartProvider>
        <Head>
          <title>ReactJS with react-bootstrap</title>
          <link rel="icon" href="./paw.ico" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ProductsCartProvider>
    </>
  );
}
