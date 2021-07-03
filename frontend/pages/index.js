import React from 'react';
import { Container, Card, Carousel, Row, Col } from 'react-bootstrap';
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
import Link from '../src/components/Link';
import products from '../public/products.json';
import HorizontalProductsList from '../src/components/HorizontalProductsList';

export default function Home() {
  return (
    <>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className={styles.carouselItem}
              src="https://via.placeholder.com/1250x350"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.carouselItem}
              src="https://via.placeholder.com/1250x350"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.carouselItem}
              src="https://via.placeholder.com/1250x350"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <div className={styles.spacingContainer}>
          <Row xs={2} md={2} lg={4}>
            <Col>
              <Card className={styles.cardItem}>
                <Card.Body className={styles.cardBody}>
                  <h4>Grande variedade de marcas</h4>
                  <FontAwesomeIcon height="60px" icon={faStar} />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={styles.cardItem}>
                <Card.Body className={styles.cardBody}>
                  <h4>Frete grátis em todo o Brasil</h4>
                  <FontAwesomeIcon height="60px" icon={faShippingFast} />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={styles.cardItem}>
                <Card.Body className={styles.cardBody}>
                  <h4>Maior a compra maior o desconto</h4>
                  <FontAwesomeIcon height="60px" icon={faPercent} />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={styles.cardItem}>
                <Card.Body className={styles.cardBody}>
                  <h4>Parcelamento em até 6x sem juros</h4>
                  <FontAwesomeIcon height="60px" icon={faCreditCard} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        <div className={styles.spacingContainer}>
          <h1>Ofertas da semana</h1>
          <h4>Aproveite!</h4>
          <HorizontalProductsList products={products} />
        </div>

        <div className={styles.spacingContainer}>
          <Row xs={1} md={3} lg={3}>
            <Col>
              <Card className={styles.cardItem}>
                <Card.Body>
                  <h4>Promoções em artigos para cachorros</h4>
                  <p>Até 50% de desconto em rações, banhos e brinquedos</p>
                  <div className={styles.cardBodyDiscount}>
                    <Link color="var(--main_white)" href="/itens">
                      ACESSE
                    </Link>
                    <FontAwesomeIcon height="50px" icon={faDog} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={styles.cardItem}>
                <Card.Body>
                  <h4>Promoções em artigos para gatos</h4>
                  <p>Até 50% de desconto em rações, banhos e areia</p>
                  <div className={styles.cardBodyDiscount}>
                    <Link color="var(--main_white)" href="/itens">
                      ACESSE
                    </Link>
                    <FontAwesomeIcon height="50px" icon={faCat} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={styles.cardItem}>
                <Card.Body>
                  <h4>Promoções em artigos para peixes</h4>
                  <p>
                    Até 50% de desconto em rações, banhos secos e brinquedos (?)
                  </p>
                  <div className={styles.cardBodyDiscount}>
                    <Link color="var(--main_white)" href="/itens">
                      ACESSE
                    </Link>
                    <FontAwesomeIcon height="50px" icon={faFish} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        <div className={styles.spacingContainer}>
          <h1>As melhores marcas</h1>
          <Row>
            <Col>
              <img
                alt="brand"
                src="https://twineich.com/wp-content/uploads/2017/10/Logo.png"
                width="75px"
                height="75px"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
