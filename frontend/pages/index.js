import React from 'react';
import NextLink from 'next/link';
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

const products = [
  {
    id: 1,
    image: 'https://placehold.it/184x232',
    title: 'Ração para cachorro médio - 5kg',
    oldPrice: '59,99',
    newPrice: '39,99',
    link: 'racao-royal-canin-medio-5kg',
  },
  {
    id: 2,
    image: 'https://placehold.it/184x232',
    title: 'Ração para cachorro grande - 25kg',
    oldPrice: '169,99',
    newPrice: '149,99',
    link: 'racao-royal-canin-medio-25kg',
  },
  {
    id: 3,
    image: 'https://placehold.it/184x232',
    title: 'Ração para cachorro pequeno - 10kg',
    oldPrice: '99,99',
    newPrice: '69,99',
    link: 'racao-royal-canin-medio-10kg',
  },
  {
    id: 4,
    image: 'https://placehold.it/184x232',
    title: 'Ração para cachorro médio - 5kg',
    oldPrice: '39,99',
    newPrice: '29,99',
    link: 'racao-premier-medio-5kg',
  },
  {
    id: 5,
    image: 'https://placehold.it/184x232',
    title: 'Ração para cachorro grande - 15kg',
    oldPrice: '109,99',
    newPrice: '99,99',
    link: 'racao-balance-grande-15kg',
  },
];

export default function Home() {
  return (
    <>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className={styles.carouselItem}
              src="https://placehold.it/1250x350"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.carouselItem}
              src="https://placehold.it/1250x350"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.carouselItem}
              src="https://placehold.it/1250x350"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <div className={styles.spacingContainer}>
          <Row xs={2} md={2} lg={4}>
            <Col>
              <Card className={styles.cardItem}>
                <Card.Body className={styles.cardBody}>
                  <p>Grande variedade de marcas</p>
                  <FontAwesomeIcon height="50px" icon={faStar} />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={styles.cardItem}>
                <Card.Body className={styles.cardBody}>
                  <p>Frete grátis em todo o Brasil</p>
                  <FontAwesomeIcon height="50px" icon={faShippingFast} />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={styles.cardItem}>
                <Card.Body className={styles.cardBody}>
                  <p>Maior a compra maior o desconto</p>
                  <FontAwesomeIcon height="50px" icon={faPercent} />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={styles.cardItem}>
                <Card.Body className={styles.cardBody}>
                  <p>Parcelamento em até 6x sem juros</p>
                  <FontAwesomeIcon height="50px" icon={faCreditCard} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        <div className={styles.spacingContainer}>
          <h1>Ofertas da semana</h1>
          <h3>Aproveite!</h3>
          <Row xs={2} md={3} lg={5}>
            {products.map((product) => {
              return (
                <Col>
                  <a href="/product">
                    <Card key={product.id} className={styles.cardProduct}>
                      <img alt="img" src={product.image} />
                      <Card.Body>
                        <p className={styles.cardProductTitle}>
                          {product.title}
                        </p>
                        <h6>De: R${product.oldPrice}</h6>
                        <h6>Por: R${product.newPrice}</h6>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
              );
            })}
          </Row>
        </div>

        <div className={styles.spacingContainer}>
          <Row xs={1} md={3} lg={3}>
            <Col>
              <Card className={styles.cardItem}>
                <Card.Body>
                  <h4>Promoções em artigos para cachorros</h4>
                  <p>Até 50% de desconto em rações, banhos e brinquedos</p>
                  <div className={styles.cardBodyDiscount}>
                    <NextLink href="/itens">ACESSE</NextLink>
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
                    <NextLink href="/itens">ACESSE</NextLink>
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
                    <Link href="/itens">ACESSE</Link>
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
