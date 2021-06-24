import React from 'react';
import { Container, Row, Card, Button, Carousel } from 'react-bootstrap';
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
      </Container>

      <Footer />
    </>
  );
}
