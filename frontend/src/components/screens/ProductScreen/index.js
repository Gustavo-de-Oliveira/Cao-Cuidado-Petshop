/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import Link from '../../Link';
import HorizontalProductsList from '../../HorizontalProductsList';
import InputQuantity from '../../InputQuantity';
import ProductsCart from '../../../context/productsCart';

export default function ProductScreen({
  productItem,
  image,
  title,
  description,
  realPrice,
  salePrice,
  stock,
}) {
  const { handleAddQuantityToCart } = useContext(ProductsCart);

  const [countQuantity, setCountQuantity] = useState(1);
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
        <div style={{ display: 'flex' }}>
          <Link color="var(--main_black)" href="/">
            Home &gt;
          </Link>
          <Link color="var(--main_black)" href="/itens">
            Cachorro &gt;
          </Link>
          <p>{title}</p>
        </div>
        <div className={styles.spacingContainer}>
          <Row>
            <Col className={styles.imagesContainer}>
              <img src={image} alt="Imagem produto principal" width="75%" />
              <div className={styles.smallImagesContainer}>
                <img
                  className={styles.smallImages}
                  src={image}
                  alt="Imagem produto secundaria"
                />
                <img
                  className={styles.smallImages}
                  src={image}
                  alt="Imagem produto secundaria"
                />
                <img
                  className={styles.smallImages}
                  src={image}
                  alt="Imagem produto secundaria"
                />
              </div>
            </Col>
            <Col>
              <div>
                <h1>{title}</h1>
                <h4>{description}</h4>
              </div>
              <p>Escolha o tamanho:</p>
              <div>
                <button type="button" className={styles.productSelectBtn}>
                  5kg
                  <br /> RS20,90/kg
                </button>
                <button type="button" className={styles.productSelectBtn}>
                  10kg
                  <br /> RS15,90/kg
                </button>
                <button type="button" className={styles.productSelectBtn}>
                  15kg
                  <br /> RS10,90/kg
                </button>
              </div>
              <p>Quantidade:</p>
              <InputQuantity
                maximumQuantity={stock}
                countQuantity={countQuantity}
                increase={() => setCountQuantity(countQuantity + 1)}
                decrease={() => setCountQuantity(countQuantity - 1)}
              />
              <div>
                <p style={{ textDecoration: 'line-through' }}>
                  De: R$ {realPrice}
                </p>
                <h2 style={{ color: 'var(--primary)' }}>
                  Por: R$ {salePrice} ?? vista
                </h2>
              </div>
              <div>
                <button
                  id="addToCartBtn"
                  onClick={
                    countQuantity > 0
                      ? () =>
                          handleAddQuantityToCart(productItem, countQuantity)
                      : null
                  }
                  type="button"
                  className={styles.addToCartBtn}
                >
                  Adicionar ao carrinho
                </button>
                <Link href="/cart" color="var(--main_white)">
                  <button
                    onClick={
                      countQuantity > 0
                        ? () =>
                            handleAddQuantityToCart(productItem, countQuantity)
                        : null
                    }
                    type="button"
                    className={styles.fastShopBtn}
                  >
                    Compra r??pida
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>

        <div className={styles.spacingContainer}>
          <Row className={styles.productsCategories}>
            <Col>
              <Link color="var(--main_white)" href="#detalhes">
                <h3>Detalhes do produto</h3>
              </Link>
            </Col>
            <Col>
              <Link color="var(--main_white)" href="#especificaoes">
                <h3>Especifica????es</h3>
              </Link>
            </Col>
            <Col>
              <Link color="var(--main_white)" href="#avaliacao">
                <h3>Avalia????o de clientes</h3>
              </Link>
            </Col>
            <Col>
              <Link color="var(--main_white)" href="#perguntas">
                <h3>Perguntas frequentes</h3>
              </Link>
            </Col>
          </Row>
        </div>

        <div className={styles.spacingContainer}>
          <Row>
            <Card className={styles.detailCard}>
              <Card.Body>
                <h2 id="detalhes">Detalhes do produto</h2>
                <p>
                  A Ra????o Seca Nutrilus Pro Frango & Carne para C??es Adultos
                  traz nutri????o de alta qualidade pelo melhor custo beneficio.
                  Desenvolvido por veterin??rios a partir de ingredientes
                  selecionados, sem corantes e aromatizantes artificiais, a
                  Ra????o Seca Nutrilus Pro Frango & Carne para C??es Adultos
                  garante uma alimenta????o balanceada e sabor irresist??vel.
                  Perfeita para nutrir e alegrar o seu c??o!
                </p>
                <p>Benef??cios:</p>
                <ul>
                  <li>intestino saud??vel;</li>
                  <li>reduz o odor das fezes;</li>
                  <li>prote??nas de alta qualidade;</li>
                  <li>pelagem mais macia e brilhante;</li>
                </ul>
                <p>Para mais informa????es acesse: www.nutrilus.com.br</p>
                <p>D??vidas entre em contato com sac@nutrire.ind.com.br</p>
              </Card.Body>
            </Card>

            <Card className={styles.detailCard}>
              <Card.Body>
                <h2 id="especificaoes">Especifica????es</h2>
                <p>
                  A Ra????o Seca Nutrilus Pro Frango & Carne para C??es Adultos
                  traz nutri????o de alta qualidade pelo melhor custo beneficio.
                  Desenvolvido por veterin??rios a partir de ingredientes
                  selecionados, sem corantes e aromatizantes artificiais, a
                  Ra????o Seca Nutrilus Pro Frango & Carne para C??es Adultos
                  garante uma alimenta????o balanceada e sabor irresist??vel.
                  Perfeita para nutrir e alegrar o seu c??o!
                </p>
                <p>Benef??cios:</p>
                <ul>
                  <li>intestino saud??vel;</li>
                  <li>reduz o odor das fezes;</li>
                  <li>prote??nas de alta qualidade;</li>
                  <li>pelagem mais macia e brilhante;</li>
                </ul>
                <p>Para mais informa????es acesse: www.nutrilus.com.br</p>
                <p>D??vidas entre em contato com sac@nutrire.ind.com.br</p>
              </Card.Body>
            </Card>

            <Card className={styles.detailCard}>
              <Card.Body>
                <h2 id="avaliacao">Avalia????o de clientes</h2>
                <h6>Top top top, at?? eu comi</h6>
                <div>
                  <FontAwesomeIcon height="15px" icon={faStar} color="yellow" />
                  <FontAwesomeIcon height="15px" icon={faStar} color="yellow" />
                  <FontAwesomeIcon height="15px" icon={faStar} color="yellow" />
                  <FontAwesomeIcon height="15px" icon={faStar} color="yellow" />
                  <FontAwesomeIcon height="15px" icon={faStar} color="yellow" />
                </div>
                <p>Muito gostoso, meus dogs amaram S2</p>
              </Card.Body>
            </Card>

            <Card className={styles.detailCard}>
              <Card.Body>
                <h2 id="perguntas">Perguntas frequentes</h2>
                <p>P: Pode alimentar gato com essa ra????o? Grata.</p>
                <p>
                  R: N??o ?? recomendado, mas j?? alimentei a minha e ela est??
                  muito bem.
                </p>
              </Card.Body>
            </Card>
          </Row>
        </div>
        <div>
          <Row>
            <Col>
              <h1>Compre junto</h1>
              <p>Normalmente esse produtos sao comprado juntos</p>
              <HorizontalProductsList products={products} />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
