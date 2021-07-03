import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../src/theme/pages/cart.module.css';
import InputQuantity from '../src/components/InputQuantity';
import ProductsCart from '../src/context/productsCart';

export default function Cart() {
  const {
    cartItems,
    handleAddToCart,
    handleRemoveFromCart,
    handleDeleteProductFromCart,
  } = useContext(ProductsCart);

  function calculateTotal(products) {
    return products.reduce(
      (accumulator, product) => accumulator + product.amount * product.newPrice,
      0
    );
  }

  function calculateTotalShip(products) {
    return (
      9.9 +
      products.reduce(
        (accumulator, product) =>
          accumulator + product.amount * product.newPrice,
        0
      )
    );
  }

  return (
    <Container>
      <h1>Meu carrinho</h1>
      {!cartItems || cartItems.length === 0 ? (
        <h4>Não existem itens no carrinho</h4>
      ) : (
        cartItems.map((cartProduct) => {
          return (
            <Row key={cartProduct.id} className={styles.spacingContainer}>
              <Col className={styles.cartMainProcessItem}>
                <img
                  src={cartProduct.image}
                  alt="img"
                  height="100px"
                  width="100px"
                />
              </Col>
              <Col className={styles.cartMainProcessItem}>
                <h3>Produto:</h3>
                <h4>{cartProduct.title}</h4>
              </Col>
              <Col className={styles.cartMainProcessItem}>
                <h3>Preço (1un):</h3>
                <h4>R$ {cartProduct.newPrice}</h4>
              </Col>
              <Col className={styles.cartMainProcessItem}>
                <h3>Quantidade:</h3>
                <InputQuantity
                  countQuantity={cartProduct.amount}
                  increase={() => handleAddToCart(cartProduct)}
                  decrease={() => handleRemoveFromCart(cartProduct.id)}
                />
              </Col>
              <Col className={styles.cartMainProcessItem}>
                <h3>Total:</h3>
                <h4>
                  R$ {(cartProduct.newPrice * cartProduct.amount).toFixed(2)}
                </h4>
              </Col>
              <Col className={styles.cartMainProcessItem}>
                <h3>Limpar:</h3>
                <button
                  type="button"
                  onClick={() => handleDeleteProductFromCart(cartProduct.id)}
                >
                  <FontAwesomeIcon height="20px" icon={faTrash} />
                  <h4>Excluir</h4>
                </button>
              </Col>
            </Row>
          );
        })
      )}

      {!cartItems || cartItems.length === 0 ? null : (
        <div className={styles.spacingContainer}>
          <Row>
            <Col>
              <div className={styles.inputInformationContainer}>
                <div className={styles.cartLeftContainer}>
                  <h2>Prazo de entrega</h2>
                  <p>Informe seu CEP para consultar as datas de entrega</p>
                </div>
                <input type="number" name="CEP" />
                <button type="button">Calcular</button>
              </div>

              <div className={styles.inputInformationContainer}>
                <div className={styles.cartLeftContainer}>
                  <h2>Cupom de desconto</h2>
                  <p>Insira o cupom de desconto</p>
                </div>
                <input type="text" name="cupom" />
                <button type="button">Verificar</button>
              </div>
            </Col>

            <Col>
              <div className={styles.finishCartContainer}>
                <h1>Resumo do pedido</h1>
                <div className={styles.priceContainer}>
                  <h3>Subtotal:</h3>
                  <h4>R$ {calculateTotal(cartItems).toFixed(2)}</h4>
                </div>
                <div className={styles.priceContainer}>
                  <h3>Frete:</h3>
                  <h4>R$ 9,90</h4>
                </div>
                <div
                  id="finalPriceContainer"
                  className={styles.finalPriceContainer}
                >
                  <h3>Total:</h3>
                  <h4>R$ {calculateTotalShip(cartItems).toFixed(2)}</h4>
                </div>
                <div className={styles.finishCartBtn}>
                  <button type="button">Finalizar compra</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
}
