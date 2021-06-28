/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Link from '../Link';
import styles from './styles.module.css';

export default function HorizontalProductsList({ products }) {
  return (
    <Row xs={2} md={3} lg={5}>
      {products.data.slice(0, 5).map((product) => {
        return (
          <Col key={product.id}>
            <Link color="var(--main_black)" href={`/itens/${product.link}`}>
              <Card className={styles.cardProduct}>
                <img alt="img" src={product.image} />
                <Card.Body>
                  <p className={styles.cardProductTitle}>{product.title}</p>
                  <h6>De: R${product.oldPrice}</h6>
                  <h6>Por: R${product.newPrice}</h6>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      })}
    </Row>
  );
}
