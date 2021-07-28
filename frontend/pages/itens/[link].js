/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import ProductScreen from '../../src/components/screens/ProductScreen';

export default function ProductInternalScreen({
  productItem,
  image,
  title,
  description,
  realPrice,
  salePrice,
}) {
  return (
    <ProductScreen
      productItem={productItem}
      image={image}
      title={title}
      description={description}
      realPrice={realPrice}
      salePrice={salePrice}
    />
  );
}

export async function getStaticProps({ params }) {
  const productsData = await fetch('http://localhost:8000/products').then(
    async (serverResponse) => {
      const response = await serverResponse.json();
      return response;
    }
  );

  const pageData = productsData.reduce((accumulator, productInfo) => {
    if (productInfo.link === params.link) {
      return {
        ...accumulator,
        productItem: productInfo,
        image: productInfo.image,
        title: productInfo.title,
        description: productInfo.description,
        realPrice:
          productInfo.realPrice !== undefined ? productInfo.realPrice : null,
        salePrice:
          productInfo.salePrice !== undefined ? productInfo.salePrice : null,
      };
    }
    return accumulator;
  }, {});

  return {
    props: {
      productItem: pageData.productItem,
      image: pageData.image,
      title: pageData.title,
      description: pageData.description,
      realPrice: pageData.realPrice,
      salePrice: pageData.salePrice,
    },
  };
}

export async function getStaticPaths() {
  const productsData = await fetch('http://localhost:8000/products').then(
    async (serverResponse) => {
      const response = await serverResponse.json();
      return response;
    }
  );

  const paths = productsData.map((product) => {
    return {
      params: {
        link: product.link,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
