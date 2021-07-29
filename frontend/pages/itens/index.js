/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Card, Form } from 'react-bootstrap';
import Link from '../../src/components/Link';

export async function getStaticProps() {
  const productsData = await fetch('http://localhost:8000/products').then(
    async (serverResponse) => {
      const response = await serverResponse.json();
      return response;
    }
  );

  return {
    props: {
      productsData,
    },
  };
}

// eslint-disable-next-line react/prop-types
export default function Itens({ productsData }) {
  return (
    <>
      <div className="col-12 row">
        <div className="col-lg-2">
          <h4 className="border-bottom">Categorias</h4>
          <Form>
            <div key="checkbox" className="mb-3">
              <Form.Check type="checkbox" id="op1" label="Ração" />

              <Form.Check type="checkbox" id="op2" label="Petiscos e ossos" />

              <Form.Check
                type="checkbox"
                id="op3"
                label="Tapetes, fraldas e banheiros"
              />

              <Form.Check type="checkbox" id="op4" label="Farmácia" />
            </div>
          </Form>

          <h4 className="border-bottom">Faixa de preço</h4>
          <Form>
            <div key="checkbox" className="mb-3">
              <Form.Check type="checkbox" id="op1" label="R$ 0,00 - R$ 50,00" />

              <Form.Check
                type="checkbox"
                id="op2"
                label="R$ 50,00 - R$ 100,00"
              />

              <Form.Check
                type="checkbox"
                id="op3"
                label="R$ 100,00 - R$ 150,00"
              />

              <Form.Check
                type="checkbox"
                id="op4"
                label="R$ 150,00 - R$ 200,00"
              />
            </div>
          </Form>

          <h4 className="border-bottom">Marcas</h4>
          <Form>
            <div key="checkbox" className="mb-3">
              <Form.Check type="checkbox" id="op1" label="Bayer Pet" />

              <Form.Check type="checkbox" id="op2" label="Ceva" />

              <Form.Check type="checkbox" id="op3" label="Royal Canin" />

              <Form.Check type="checkbox" id="op4" label="Pet Society" />
            </div>
          </Form>
        </div>

        <div className="col-lg-10 pl-5">
          <div className="container-fluid text-center">
            <div className="col-12 row w-100">
              {/* eslint-disable-next-line react/prop-types */}
              {productsData.map((product) => {
                return (
                  <Card
                    key={product._id}
                    style={{ width: '15rem' }}
                    className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto"
                  >
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>
                        <Link
                          color="var(--main_black)"
                          href={`/itens/${product.link}`}
                          className="w-100"
                        >
                          {product.title}
                        </Link>
                      </Card.Title>
                      <h4>De: R${product.realPrice}</h4>
                      <h4>Por: R${product.salePrice}</h4>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
