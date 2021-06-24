import React from 'react';
import { Container, Card, Carousel, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCat,
  faCreditCard,
  faDog,
  faFish,
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

        <div>
          <h1>Ofertas da semana</h1>
          <h3>Aproveite!</h3>
          <Row xs={3} md={6}>
            <Card className={styles.cardProduct}>
              <img alt="img" src="https://placehold.it/184x232" />
              <Card.Body>
                <p className={styles.cardProductTitle}>
                  Ração para cachorro médio - 5kg
                </p>
                <h6>De: R$59,99</h6>
                <h6>Por: R$39,99</h6>
              </Card.Body>
            </Card>
            <Card className={styles.cardProduct}>
              <img alt="img" src="https://placehold.it/184x232" />
              <Card.Body>
                <p className={styles.cardProductTitle}>
                  Ração para cachorro médio - 5kg
                </p>
                <h6>De: R$59,99</h6>
                <h6>Por: R$39,99</h6>
              </Card.Body>
            </Card>
            <Card className={styles.cardProduct}>
              <img alt="img" src="https://placehold.it/184x232" />
              <Card.Body>
                <p className={styles.cardProductTitle}>
                  Ração para cachorro médio - 5kg
                </p>
                <h6>De: R$59,99</h6>
                <h6>Por: R$39,99</h6>
              </Card.Body>
            </Card>
            <Card className={styles.cardProduct}>
              <img alt="img" src="https://placehold.it/184x232" />
              <Card.Body>
                <p className={styles.cardProductTitle}>
                  Ração para cachorro médio - 5kg
                </p>
                <h6>De: R$59,99</h6>
                <h6>Por: R$39,99</h6>
              </Card.Body>
            </Card>
            <Card className={styles.cardProduct}>
              <img alt="img" src="https://placehold.it/184x232" />
              <Card.Body>
                <p className={styles.cardProductTitle}>
                  Ração para cachorro médio - 5kg
                </p>
                <h6>De: R$59,99</h6>
                <h6>Por: R$39,99</h6>
              </Card.Body>
            </Card>
          </Row>
        </div>

        <Container className={styles.cardsContainer}>
          <Card className={styles.cardItem}>
            <Card.Body>
              <h4>Promoções em artigos para cachorros</h4>
              <p>Até 50% de desconto em rações, banhos e brinquedos</p>
              <div className={styles.cardBodyDiscount}>
                <a href="/">ACESSE</a>
                <FontAwesomeIcon height="50px" icon={faDog} />
              </div>
            </Card.Body>
          </Card>

          <Card className={styles.cardItem}>
            <Card.Body>
              <h4>Promoções em artigos para gatos</h4>
              <p>Até 50% de desconto em rações, banhos e areia</p>
              <div className={styles.cardBodyDiscount}>
                <a href="/">ACESSE</a>
                <FontAwesomeIcon height="50px" icon={faCat} />
              </div>
            </Card.Body>
          </Card>

          <Card className={styles.cardItem}>
            <Card.Body>
              <h4>Promoções em artigos para coelhos</h4>
              <p>Até 50% de desconto em rações, banhos secos e brinquedos</p>
              <div className={styles.cardBodyDiscount}>
                <a href="/">ACESSE</a>
                <FontAwesomeIcon height="50px" icon={faFish} />
              </div>
            </Card.Body>
          </Card>
        </Container>

        <Container>
          <h1>As melhores marcas</h1>
          <img
            alt="brand"
            src="https://twineich.com/wp-content/uploads/2017/10/Logo.png"
            width="75px"
            height="75px"
          />
        </Container>
      </Container>

      <Footer />
    </>
  );
}
