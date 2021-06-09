import React from 'react';
import NextLink from 'next/link';
import { Container } from 'react-bootstrap';

export default function Page404() {
  return (
    <Container>
      <h1>404</h1>
      <p>Verifique outra página</p>
      <NextLink href="/">Voltar para a Home</NextLink>
    </Container>
  );
}
