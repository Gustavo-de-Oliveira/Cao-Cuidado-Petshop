import React from 'react';

// eslint-disable-next-line react/prop-types
export default function ProductScreen({ image, title, oldPrice, newPrice }) {
  return (
    <div>
      <img src={image} alt="imagem do produto" />
      <p>{title}</p>
      <p>{oldPrice}</p>
      <p>{newPrice}</p>
    </div>
  );
}
