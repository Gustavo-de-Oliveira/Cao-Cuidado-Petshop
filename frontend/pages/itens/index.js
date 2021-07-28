import React from 'react';
import { Card, Form } from 'react-bootstrap';
import Link from '../../src/components/Link';

export async function getStaticProps() {
  // const productsData = products.data;
  const productsData = await fetch('http://localhost:8000/products').then(
    async (serverResponse) => {
      const response = await serverResponse.json();
      // setProducts(response);
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
  // const [Show, setShow] = React.useState(false);
  // const [ShowFilter, setShowFilter] = React.useState(true);

  return (
    <>
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
