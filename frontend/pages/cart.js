import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../src/theme/pages/cart.module.css';

export default function Cart() {
  return (
    <Container>
      <div className={styles.spacingContainer}>
        <h1>Meu carrinho</h1>
        <Row>
          <Col className={styles.cartMainProcessItem}>
            <img src="" alt="img" />
          </Col>
          <Col className={styles.cartMainProcessItem}>
            <h5>Produto:</h5>
            <p>Titulo do produto</p>
            <p>Descrição do produto</p>
          </Col>
          <Col className={styles.cartMainProcessItem}>
            <h5>Preço (1un):</h5>
            <p>R$ 149,90</p>
          </Col>
          <Col className={styles.cartMainProcessItem}>
            <h5>Quantidade</h5>
            <div>Input quantidade</div>
          </Col>
          <Col className={styles.cartMainProcessItem}>
            <h5>Total:</h5>
            <p>R$ 149,09</p>
          </Col>
          <Col className={styles.cartMainProcessItem}>
            <FontAwesomeIcon height="20px" icon={faTrash} />
            <p>Excluir</p>
          </Col>
        </Row>
      </div>

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
                <p>R$ 149,90</p>
              </div>
              <div className={styles.priceContainer}>
                <h6>Frete:</h6>
                <p>R$ 9,90</p>
              </div>
              <div className={styles.finalPriceContainer}>
                <h6>Total:</h6>
                <p>R$ 149,90 + 9,90</p>
              </div>
              <div className={styles.finishCartBtn}>
                <button type="button">Finalizar compra</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
