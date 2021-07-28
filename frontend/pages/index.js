import React, { useEffect, useState } from 'react';
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
import HorizontalProductsList from '../src/components/HorizontalProductsList';

const brandsList = [
  {
    id: 1,
    url: 'https://twineich.com/wp-content/uploads/2017/10/Logo.png',
  },
  {
    id: 2,
    url: 'https://staticpetz.stoom.com.br/fotos/imagem-marca-bayer-pet-bayer.jpg',
  },
  {
    id: 3,
    url: 'https://staticpetz.stoom.com.br/fotos/imagem-marca-royal-canin-royal_canin.jpg',
  },
  {
    id: 4,
    url: 'https://staticpetz.stoom.com.br/fotos/imagem-marca-purina-purina.jpg',
  },
  {
    id: 5,
    url: 'https://staticpetz.stoom.com.br/fotos/imagem-marca-pedigree-pedigree.jpg',
  },
  {
    id: 6,
    url: 'https://staticpetz.stoom.com.br/fotos/imagem-marca-jambo-pet-jambo_pet.jpg',
  },
  {
    id: 7,
    url: 'https://www.petz.com.br/novaLoja/images/brands/premierpet.jpg',
  },
  {
    id: 8,
    url: 'https://staticpetz.stoom.com.br/novaLoja/images/brands/nd.jpg',
  },
];

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    await fetch('http://localhost:8000/products').then(
      async (serverResponse) => {
        const response = await serverResponse.json();
        setProducts(response);
      }
    );
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className={styles.carouselItem}
              src="https://i.postimg.cc/sDBxLp3t/header-desk.png"
              width="1250px"
              height="350px"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.carouselItem}
              src="https://i.postimg.cc/JhKR0n1N/banner-central-delivery-mobile.jpg"
              width="1250px"
              height="350px"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.carouselItem}
              src="https://i.postimg.cc/W4phXxz7/1606938303-1605896789-banners-site-02.jpg"
              width="1250px"
              height="350px"
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
            {brandsList.map((brand) => {
              return (
                <Col key={brand.id}>
                  <img alt="brand" src={brand.url} width="75px" height="75px" />
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </>
  );
}
