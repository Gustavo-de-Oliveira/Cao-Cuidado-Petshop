import React, { createContext, useState } from 'react';

const ProductsCart = createContext({});

// eslint-disable-next-line react/prop-types
export const ProductsCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function getTotalItems(productItems) {
    productItems.reduce((accumulator, item) => accumulator + item.amount, 0);
  }

  function handleAddToCart(productItem) {
    setCartItems((prev) => {
      // item ja foi inserido no carrinho anteriormente, add + 1
      const isItemInCart = prev.find((item) => item.id === productItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === productItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      // primeira vez que o item eh adicionado no carrinho
      return [...prev, { ...productItem, amount: 1 }];
    });
  }

  function handleAddQuantityToCart(productItem, quantity) {
    setCartItems((prev) => {
      // item ja foi inserido no carrinho anteriormente, add + 1
      const isItemInCart = prev.find((item) => item.id === productItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === productItem.id
            ? { ...item, amount: item.amount + quantity }
            : item
        );
      }

      // primeira vez que o item eh adicionado no carrinho
      return [...prev, { ...productItem, amount: quantity }];
    });
  }

  function handleRemoveFromCart(productId) {
    setCartItems((prev) =>
      prev.reduce((accumulator, item) => {
        if (item.id === productId) {
          if (item.amount === 1) {
            return accumulator;
          }
          return [...accumulator, { ...item, amount: item.amount - 1 }];
        }
        return [...accumulator, item];
      }, [])
    );
  }

  function handleDeleteProductFromCart(productId) {
    setCartItems((prev) =>
      prev.reduce((accumulator, item) => {
        if (item.id === productId) {
          return accumulator;
        }
        return [...accumulator, item];
      }, [])
    );
  }

  return (
    <ProductsCart.Provider
      value={{
        // states
        cartItems,
        // functions
        getTotalItems,
        handleAddToCart,
        handleAddQuantityToCart,
        handleRemoveFromCart,
        handleDeleteProductFromCart,
      }}
    >
      {children}
    </ProductsCart.Provider>
  );
};

export default ProductsCart;
