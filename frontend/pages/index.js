import React from 'react';
import { Container, Row, Card, Button, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCreditCard,
  faPercent,
  faShippingFast,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../src/theme/pages/index.module.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className={styles.carouselItem}
              src="https://placehold.it/1000x250"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.carouselItem}
              src="https://placehold.it/1000x250"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.carouselItem}
              src="https://placehold.it/1000x250"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <Container className={styles.cardsContainer}>
          <Card className={styles.cardItem}>
            <Card.Body className={styles.cardBody}>
              <p>Grande variedade de marcas</p>
              <FontAwesomeIcon height="50px" icon={faStar} />
            </Card.Body>
          </Card>
          <Card className={styles.cardItem}>
            <Card.Body className={styles.cardBody}>
              <p>Frete grátis em todo o Brasil</p>
              <FontAwesomeIcon height="50px" icon={faShippingFast} />
            </Card.Body>
          </Card>
          <Card className={styles.cardItem}>
            <Card.Body className={styles.cardBody}>
              <p>Maior a compra maior o desconto</p>
              <FontAwesomeIcon height="50px" icon={faPercent} />
            </Card.Body>
          </Card>
          <Card className={styles.cardItem}>
            <Card.Body className={styles.cardBody}>
              <p>Parcelamento em até 6x sem juros</p>
              <FontAwesomeIcon height="50px" icon={faCreditCard} />
            </Card.Body>
          </Card>
        </Container>
      </Container>

      <Footer />
    </>
  );
}
