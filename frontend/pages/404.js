import React from 'react';
// import NextLink from 'next/link';
import { Container, Image, Col, Row } from 'react-bootstrap';

export default function Page404() {
  return (
    <Container>
      <h1 className="text-center m-2">404 - Página não encontrada</h1>
      <Row className="justify-content-md-center">
        <Col md="auto" className="mt-2 mb-3">
          <Image
            className=""
            src="https://st2.depositphotos.com/1000877/5947/i/600/depositphotos_59478951-stock-photo-red-kitten.jpg/"
            rounded
          />
        </Col>
      </Row>

      <p className="text-center">
        Desculpe, mas site ainda está em construção, portanto algumas páginas
        ainda não estão prontas
      </p>
      <p className="text-center">
        Volte em alguns dias ou se inscreva na nossa newsletter abaixo para
        receber nossas atualizações e promoções no email!!!
      </p>
    </Container>
  );
}
