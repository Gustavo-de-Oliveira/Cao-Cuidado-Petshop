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
        <h5>Não existem itens no carrinho</h5>
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
                <h5>Produto:</h5>
                <p>{cartProduct.title}</p>
                {/* <p>{cartProduct.description}</p> */}
              </Col>
              <Col className={styles.cartMainProcessItem}>
                <h5>Preço (1un):</h5>
                <p>R$ {cartProduct.newPrice}</p>
              </Col>
              <Col className={styles.cartMainProcessItem}>
                <h5>Quantidade:</h5>
                <InputQuantity
                  countQuantity={cartProduct.amount}
                  increase={() => handleAddToCart(cartProduct)}
                  decrease={() => handleRemoveFromCart(cartProduct.id)}
                />
              </Col>
              <Col className={styles.cartMainProcessItem}>
                <h5>Total:</h5>
                <p>
                  R$ {(cartProduct.newPrice * cartProduct.amount).toFixed(2)}
                </p>
              </Col>
              <Col className={styles.cartMainProcessItem}>
                <h5>Limpar:</h5>
                <button
                  type="button"
                  onClick={() => handleDeleteProductFromCart(cartProduct.id)}
                >
                  <FontAwesomeIcon height="20px" icon={faTrash} />
                  <p>Excluir</p>
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
                  <h4>Prazo de entrega</h4>
                  <p>Informe seu CEP para consultar as datas de entrega</p>
                </div>
                <input type="number" name="CEP" />
                <button type="button">Calcular</button>
              </div>

              <div className={styles.inputInformationContainer}>
                <div className={styles.cartLeftContainer}>
                  <h4>Cupom de desconto</h4>
                  <p>Insira o cupom de desconto</p>
                </div>
                <input type="text" name="cupom" />
                <button type="button">Verificar</button>
              </div>
            </Col>

            <Col>
              <div className={styles.finishCartContainer}>
                <h2>Resumo do pedido</h2>
                <div className={styles.priceContainer}>
                  <h6>Subtotal:</h6>
                  <p>R$ {calculateTotal(cartItems).toFixed(2)}</p>
                </div>
                <div className={styles.priceContainer}>
                  <h6>Frete:</h6>
                  <p>R$ 9,90</p>
                </div>
                <div className={styles.finalPriceContainer}>
                  <h6>Total:</h6>
                  <p>R$ {calculateTotalShip(cartItems).toFixed(2)}</p>
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
