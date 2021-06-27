/* eslint-disable react/prop-types */
import React from 'react';
import products from '../../public/products.json';
import ProductScreen from '../../src/components/screens/ProductScreen';

export default function ProductInternalScreen({
  image,
  title,
  description,
  oldPrice,
  newPrice,
}) {
  return (
    <ProductScreen
      image={image}
      title={title}
      description={description}
      oldPrice={oldPrice}
      newPrice={newPrice}
    />
  );
}

export function getStaticProps({ params }) {
  const productsData = products.data;

  const pageData = productsData.reduce((accumulator, productInfo) => {
    if (productInfo.link === params.link) {
      return {
        ...accumulator,
        image: productInfo.image,
        title: productInfo.title,
        description: productInfo.description,
        oldPrice: productInfo.oldPrice,
        newPrice: productInfo.newPrice,
      };
    }
    return accumulator;
  }, {});

  return {
    props: {
      image: pageData.image,
      title: pageData.title,
      description: pageData.description,
      oldPrice: pageData.oldPrice,
      newPrice: pageData.newPrice,
    },
  };
}

export function getStaticPaths() {
  const productsData = products.data;

  const paths = productsData.map((product) => {
    return { params: { link: product.link } };
  });

  return {
    paths,
    fallback: false,
  };
}
