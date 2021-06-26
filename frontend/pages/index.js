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

export default function Home() {
  return (
    <>
      <Container>
        <div className={styles.spacingContainer}>
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
              <Col>
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
              </Col>
              <Col>
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
              </Col>
              <Col>
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
              </Col>
              <Col>
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
              </Col>
              <Col>
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
              </Col>
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
                      <a href="/">ACESSE</a>
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
                      <a href="/">ACESSE</a>
                      <FontAwesomeIcon height="50px" icon={faCat} />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className={styles.cardItem}>
                  <Card.Body>
                    <h4>Promoções em artigos para coelhos</h4>
                    <p>
                      Até 50% de desconto em rações, banhos secos e brinquedos
                    </p>
                    <div className={styles.cardBodyDiscount}>
                      <a href="/">ACESSE</a>
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
        </div>
      </Container>
    </>
  );
}
