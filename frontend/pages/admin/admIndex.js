import React from 'react';
// import NextLink from 'next/link';
import { Container, Image, Col, Row, Nav } from 'react-bootstrap';

export default function admIndex() {
  return (
    <div>
      <h1 className="text-center m-2">Tela de administrador</h1>

      <div className="col-12 row">
        <button className="col-5 btn btn-primary m-2 mx-auto">
          Quadro de funcionários
        </button>

        <Nav.Link href="/admin/produtos" className="col-5 btn btn-primary m-2 mx-auto">
          <span className="text-center"> Estoque</span>
        </Nav.Link>

      </div>

    </div>
  );
}
