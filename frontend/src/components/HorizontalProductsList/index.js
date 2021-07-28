/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Link from '../Link';
import styles from './styles.module.css';

export default function HorizontalProductsList({ products }) {
  return (
    <Row xs={2} md={3} lg={5} id="horizontalProductsList">
      {products.slice(0, 5).map((product) => {
        return (
          <Col key={product._id}>
            <Link color="var(--main_black)" href={`/itens/${product.link}`}>
              <Card className={styles.cardProduct}>
                <img
                  width="184px"
                  height="232px"
                  alt="img"
                  src={product.image}
                />
                <Card.Body>
                  <p className={styles.cardProductTitle}>{product.title}</p>
                  <h4>De: R${product.realPrice}</h4>
                  <h4>Por: R${product.salePrice}</h4>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      })}
    </Row>
  );
}
