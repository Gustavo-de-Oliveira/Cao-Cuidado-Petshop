/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import Link from '../../Link';
import HorizontalProductsList from '../../HorizontalProductsList';
import products from '../../../../public/products.json';

export default function ProductScreen({
  image,
  title,
  description,
  oldPrice,
  newPrice,
}) {
  const [countQuantity, setCountQuantity] = useState(0);

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
              <img src={image} alt="Imagem produto principal" width="50%" />
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
                <h6>{description}</h6>
              </div>
              <p>Escolha o tamanho:</p>
              <div>
                <button type="button" className={styles.productSelectBtn}>
                  10kg
                  <br /> RS10,90/kg
                </button>
                <button type="button" className={styles.productSelectBtn}>
                  10kg
                  <br /> RS10,90/kg
                </button>
                <button type="button" className={styles.productSelectBtn}>
                  10kg
                  <br /> RS10,90/kg
                </button>
              </div>
              <p>Quantidade:</p>
              <div className={styles.productQuantityContainer}>
                <button
                  type="button"
                  className={styles.productQuantityBtn}
                  onClick={() => setCountQuantity(countQuantity - 1)}
                >
                  <FontAwesomeIcon height="20px" icon={faMinus} />
                </button>
                <input
                  className={styles.productQuantityInput}
                  type="number"
                  value={countQuantity}
                  min="1"
                  max="5"
                />
                <button
                  type="button"
                  className={styles.productQuantityBtn}
                  onClick={() => setCountQuantity(countQuantity + 1)}
                >
                  <FontAwesomeIcon height="20px" icon={faPlus} />
                </button>
              </div>
              <div>
                <p style={{ textDecoration: 'line-through' }}>
                  De: R$ {oldPrice}
                </p>
                <h3 style={{ color: 'var(--primary)' }}>
                  Por: R$ {newPrice} à vista
                </h3>
              </div>
              <div>
                <button type="button" className={styles.addToCartBtn}>
                  Adicionar ao carrinho
                </button>
                <button type="button" className={styles.fastShopBtn}>
                  Compra rápida
                </button>
              </div>
            </Col>
          </Row>
        </div>

        <div className={styles.spacingContainer}>
          <Row className={styles.productsCategories}>
            <Col>
              <Link color="var(--main_white)" href="#detalhes">
                Detalhes do produto
              </Link>
            </Col>
            <Col>
              <Link color="var(--main_white)" href="#especificaoes">
                Especificações
              </Link>
            </Col>
            <Col>
              <Link color="var(--main_white)" href="#avaliacao">
                Avaliação de clientes
              </Link>
            </Col>
            <Col>
              <Link color="var(--main_white)" href="#perguntas">
                Perguntas frequentes
              </Link>
            </Col>
          </Row>
        </div>

        <div className={styles.spacingContainer}>
          <Row>
            <Card className={styles.detailCard}>
              <Card.Body>
                <Card.Title id="detalhes">Detalhes do produto</Card.Title>
                <Card.Text>
                  A Ração Seca Nutrilus Pro Frango & Carne para Cães Adultos
                  traz nutrição de alta qualidade pelo melhor custo beneficio.
                  Desenvolvido por veterinários a partir de ingredientes
                  selecionados, sem corantes e aromatizantes artificiais, a
                  Ração Seca Nutrilus Pro Frango & Carne para Cães Adultos
                  garante uma alimentação balanceada e sabor irresistível.
                  Perfeita para nutrir e alegrar o seu cão!
                </Card.Text>
                <Card.Text>Benefícios:</Card.Text>
                <ul>
                  <li>intestino saudável;</li>
                  <li>reduz o odor das fezes;</li>
                  <li>proteínas de alta qualidade;</li>
                  <li>pelagem mais macia e brilhante;</li>
                </ul>
                <Card.Text>
                  Para mais informações acesse: www.nutrilus.com.br
                </Card.Text>
                <Card.Text>
                  Dúvidas entre em contato com sac@nutrire.ind.com.br
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className={styles.detailCard}>
              <Card.Body>
                <Card.Title id="especificaoes">Especificações</Card.Title>
                <Card.Text>
                  A Ração Seca Nutrilus Pro Frango & Carne para Cães Adultos
                  traz nutrição de alta qualidade pelo melhor custo beneficio.
                  Desenvolvido por veterinários a partir de ingredientes
                  selecionados, sem corantes e aromatizantes artificiais, a
                  Ração Seca Nutrilus Pro Frango & Carne para Cães Adultos
                  garante uma alimentação balanceada e sabor irresistível.
                  Perfeita para nutrir e alegrar o seu cão!
                </Card.Text>
                <Card.Text>Benefícios:</Card.Text>
                <ul>
                  <li>intestino saudável;</li>
                  <li>reduz o odor das fezes;</li>
                  <li>proteínas de alta qualidade;</li>
                  <li>pelagem mais macia e brilhante;</li>
                </ul>
                <Card.Text>
                  Para mais informações acesse: www.nutrilus.com.br
                </Card.Text>
                <Card.Text>
                  Dúvidas entre em contato com sac@nutrire.ind.com.br
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className={styles.detailCard}>
              <Card.Body>
                <Card.Title id="avaliacao">Avaliação de clientes</Card.Title>
                <h6>Top top top, até eu comi</h6>
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
                <Card.Title id="perguntas">Perguntas frequentes</Card.Title>
                <Card.Text>
                  P: Pode alimentar gato com essa ração? Grata.
                </Card.Text>
                <Card.Text>
                  R: Não é recomendado, mas já alimentei a minha e ela está
                  muito bem.
                </Card.Text>
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
