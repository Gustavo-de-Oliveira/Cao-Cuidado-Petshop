/* eslint-disable react/prop-types */
import React from 'react';

export default function ProductScreen({
  image,
  title,
  description,
  oldPrice,
  newPrice,
}) {
  return (
    <div>
      <img src={image} alt="imagem do produto" />
      <p>{title}</p>
      <p>{description}</p>
      <p>{oldPrice}</p>
      <p>{newPrice}</p>
    </div>
  );
}
