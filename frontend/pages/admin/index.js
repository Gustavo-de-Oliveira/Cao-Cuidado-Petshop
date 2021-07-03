import React from 'react';
// import NextLink from 'next/link';
import { Nav } from 'react-bootstrap';

export default function admIndex() {
  return (
    <div>
      <h1 className="text-center m-2">Tela de administrador</h1>

      <div className="col-12 row">
        <Nav.Link
          href="/admin/users"
          className="col-5 btn btn-primary m-2 mx-auto"
        >
          <span className="text-center">Usuarios da plataforma</span>
        </Nav.Link>
        <Nav.Link
          href="/admin/produtos"
          className="col-5 btn btn-primary m-2 mx-auto"
        >
          <span className="text-center"> Estoque</span>
        </Nav.Link>
      </div>
    </div>
  );
}
