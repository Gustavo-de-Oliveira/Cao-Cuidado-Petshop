import React from 'react';
import { Card, Form } from 'react-bootstrap';
import Link from '../../src/components/Link';
import products from '../../public/products.json';

export function getStaticProps() {
  const productsData = products.data;

  return {
    props: {
      productsData,
    },
  };
}

// eslint-disable-next-line react/prop-types
export default function Itens({ productsData }) {
  // const [Show, setShow] = React.useState(false);
  // const [ShowFilter, setShowFilter] = React.useState(true);

  return (
    <div>
      <div className="col-12 row">
        <div className="col-lg-2">
          <h4 className="border-bottom">Categoria 1</h4>
          <Form>
            <div key="checkbox" className="mb-3">
              <Form.Check type="checkbox" id="op1" label="op 1" />

              <Form.Check type="checkbox" id="op2" label="op 2" />

              <Form.Check type="checkbox" id="op3" label="op 3" />

              <Form.Check type="checkbox" id="op4" label="op 4" />
            </div>
          </Form>

          <h4 className="border-bottom">Categoria 2</h4>
          <Form>
            <div key="checkbox" className="mb-3">
              <Form.Check type="checkbox" id="op1" label="op 1" />

              <Form.Check type="checkbox" id="op2" label="op 2" />

              <Form.Check type="checkbox" id="op3" label="op 3" />

              <Form.Check type="checkbox" id="op4" label="op 4" />
            </div>
          </Form>

          <h4 className="border-bottom">Categoria 3</h4>
          <Form>
            <div key="checkbox" className="mb-3">
              <Form.Check type="checkbox" id="op1" label="op 1" />

              <Form.Check type="checkbox" id="op2" label="op 2" />

              <Form.Check type="checkbox" id="op3" label="op 3" />

              <Form.Check type="checkbox" id="op4" label="op 4" />
            </div>
          </Form>

          <h4 className="border-bottom">Categoria 4</h4>
          <Form>
            <div key="checkbox" className="mb-3">
              <Form.Check type="checkbox" id="op1" label="op 1" />

              <Form.Check type="checkbox" id="op2" label="op 2" />

              <Form.Check type="checkbox" id="op3" label="op 3" />

              <Form.Check type="checkbox" id="op4" label="op 4" />
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
                    style={{ width: '15rem' }}
                    className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto"
                  >
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>
                        <Link href={`/itens/${product.link}`} className="w-100">
                          {product.title}
                        </Link>
                      </Card.Title>
                      <Card.Text>
                        <small>{product.description}</small>
                        <br />
                        {product.newPrice}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
