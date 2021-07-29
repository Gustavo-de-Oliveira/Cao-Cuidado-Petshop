import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import NextLink from 'next/link';
import { Container, Image, Col, Row } from 'react-bootstrap';

export default function PageAbout() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto" className="mt-2 mb-3">
          <h1 className="text-center">Sobre nós</h1>
          <Image
            className="mr-3 float-left"
            src="https://st2.depositphotos.com/1000877/5947/i/600/depositphotos_59478951-stock-photo-red-kitten.jpg"
            rounded
          />

          <p>
            A Cão Cuidado é um e-commerce petshop, focado nos melhores produtos
            das melhores marcas para atender melhor você! Além de rações, aqui
            você encontra outros tipos de produtos para o seu pet, como:
            medicamentos, beleza e limpeza, brinquedos, coleiras e guias e muito
            mais! Tudo isso muito fácil em nosso site e com frete rápido
          </p>
          <p>
            <br />
            Além do e-commerce de produtos para os seus pets, temos também uma
            área para você adotar um novo pet! Visite e veja quais os novos
            animaiszinhos que procuram um novo dono.
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h5 className="text-uppercase mt-4">Redes sociais</h5>

            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://twitter.com" className=" list-inline-item">
                  <FontAwesomeIcon
                    color="var(--primary)"
                    height="30px"
                    icon={faTwitter}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://facebook.com/caocuidadodermato"
                  className=" list-inline-item"
                >
                  <FontAwesomeIcon
                    color="var(--primary)"
                    height="30px"
                    icon={faFacebook}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://instagram.com/caocuidado"
                  className=" list-inline-item"
                >
                  <FontAwesomeIcon
                    color="var(--primary)"
                    height="30px"
                    icon={faInstagram}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://youtube.com" className=" list-inline-item">
                  <FontAwesomeIcon
                    color="var(--primary)"
                    height="30px"
                    icon={faYoutube}
                  />
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
