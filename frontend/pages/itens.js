import React from 'react';
// import NextLink from 'next/link';
import { Container, Image, Col, Row, Card, Button, Modal, Form, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faUser,
  faShoppingCart,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';

export default function adoption() {
  const [Show, setShow] = React.useState(false);
  const [ShowFilter, setShowFilter] = React.useState(true);
  
  return (
    <div>
      <div className="col-12 row">
        <div className="col-lg-2">
          <h4 className="border-bottom">Categoria 1</h4>
          <Form>
              <div key="checkbox" className="mb-3">
                <Form.Check 
                  type="checkbox"
                  id="op1"
                  label="op 1"
                />

                <Form.Check 
                  type="checkbox"
                  id="op2"
                  label="op 2"
                />

                <Form.Check 
                  type="checkbox"
                  id="op3"
                  label="op 3"
                />

                <Form.Check 
                  type="checkbox"
                  id="op4"
                  label="op 4"
                />
              </div>
          </Form>

          <h4 className="border-bottom">Categoria 2</h4>
          <Form>
              <div key="checkbox" className="mb-3">
                <Form.Check 
                  type="checkbox"
                  id="op1"
                  label="op 1"
                />

                <Form.Check 
                  type="checkbox"
                  id="op2"
                  label="op 2"
                />

                <Form.Check 
                  type="checkbox"
                  id="op3"
                  label="op 3"
                />

                <Form.Check 
                  type="checkbox"
                  id="op4"
                  label="op 4"
                />
              </div>
          </Form>

          <h4 className="border-bottom">Categoria 3</h4>
          <Form>
              <div key="checkbox" className="mb-3">
                <Form.Check 
                  type="checkbox"
                  id="op1"
                  label="op 1"
                />

                <Form.Check 
                  type="checkbox"
                  id="op2"
                  label="op 2"
                />

                <Form.Check 
                  type="checkbox"
                  id="op3"
                  label="op 3"
                />

                <Form.Check 
                  type="checkbox"
                  id="op4"
                  label="op 4"
                />
              </div>
          </Form>

          <h4 className="border-bottom">Categoria 4</h4>
          <Form>
              <div key="checkbox" className="mb-3">
                <Form.Check 
                  type="checkbox"
                  id="op1"
                  label="op 1"
                />

                <Form.Check 
                  type="checkbox"
                  id="op2"
                  label="op 2"
                />

                <Form.Check 
                  type="checkbox"
                  id="op3"
                  label="op 3"
                />

                <Form.Check 
                  type="checkbox"
                  id="op4"
                  label="op 4"
                />
              </div>
          </Form>
        </div>

        <div className="col-lg-10 pl-5">
            <div className="container-fluid text-center">
              <div className="col-12 row w-100">
                <Card style={{ width: '15rem' }} className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto">
                  <Card.Img variant="top" src="holder.js/25px45" />
                  <Card.Body>
                    <Card.Title><Nav.Link href="/" className="w-100">Nome do produto</Nav.Link></Card.Title>
                    <Card.Text>
                      <small>Descrição curta...</small><br/>
                      R$ 90,00
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }} className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto">
                  <Card.Img variant="top" src="holder.js/25px45" />
                  <Card.Body>
                    <Card.Title><Nav.Link href="/" className="w-100">Nome do produto</Nav.Link></Card.Title>
                    <Card.Text>
                      <small>Descrição curta...</small><br/>
                      R$ 90,00
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }} className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto">
                  <Card.Img variant="top" src="holder.js/25px45" />
                  <Card.Body>
                    <Card.Title><Nav.Link href="/" className="w-100">Nome do produto</Nav.Link></Card.Title>
                    <Card.Text>
                      <small>Descrição curta...</small><br/>
                      R$ 90,00
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }} className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto">
                  <Card.Img variant="top" src="holder.js/25px45" />
                  <Card.Body>
                    <Card.Title><Nav.Link href="/" className="w-100">Nome do produto</Nav.Link></Card.Title>
                    <Card.Text>
                      <small>Descrição curta...</small><br/>
                      R$ 90,00
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }} className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto">
                  <Card.Img variant="top" src="holder.js/25px45" />
                  <Card.Body>
                    <Card.Title><Nav.Link href="/" className="w-100">Nome do produto</Nav.Link></Card.Title>
                    <Card.Text>
                      <small>Descrição curta...</small><br/>
                      R$ 90,00
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }} className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto">
                  <Card.Img variant="top" src="holder.js/25px45" />
                  <Card.Body>
                    <Card.Title><Nav.Link href="/" className="w-100">Nome do produto</Nav.Link></Card.Title>
                    <Card.Text>
                      <small>Descrição curta...</small><br/>
                      R$ 90,00
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }} className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto">
                  <Card.Img variant="top" src="holder.js/25px45" />
                  <Card.Body>
                    <Card.Title><Nav.Link href="/" className="w-100">Nome do produto</Nav.Link></Card.Title>
                    <Card.Text>
                      <small>Descrição curta...</small><br/>
                      R$ 90,00
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }} className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto">
                  <Card.Img variant="top" src="holder.js/25px45" />
                  <Card.Body>
                    <Card.Title><Nav.Link href="/" className="w-100">Nome do produto</Nav.Link></Card.Title>
                    <Card.Text>
                      <small>Descrição curta...</small><br/>
                      R$ 90,00
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }} className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto">
                  <Card.Img variant="top" src="holder.js/25px45" />
                  <Card.Body>
                    <Card.Title><Nav.Link href="/" className="w-100">Nome do produto</Nav.Link></Card.Title>
                    <Card.Text>
                      <small>Descrição curta...</small><br/>
                      R$ 90,00
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }} className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto">
                  <Card.Img variant="top" src="holder.js/25px45" />
                  <Card.Body>
                    <Card.Title><Nav.Link href="/" className="w-100">Nome do produto</Nav.Link></Card.Title>
                    <Card.Text>
                      <small>Descrição curta...</small><br/>
                      R$ 90,00
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }} className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto">
                  <Card.Img variant="top" src="holder.js/25px45" />
                  <Card.Body>
                    <Card.Title><Nav.Link href="/" className="w-100">Nome do produto</Nav.Link></Card.Title>
                    <Card.Text>
                      <small>Descrição curta...</small><br/>
                      R$ 90,00
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }} className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto">
                  <Card.Img variant="top" src="holder.js/25px45" />
                  <Card.Body>
                    <Card.Title><Nav.Link href="/" className="w-100">Nome do produto</Nav.Link></Card.Title>
                    <Card.Text>
                      <small>Descrição curta...</small><br/>
                      R$ 90,00
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }} className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto">
                  <Card.Img variant="top" src="holder.js/25px45" />
                  <Card.Body>
                    <Card.Title><Nav.Link href="/" className="w-100">Nome do produto</Nav.Link></Card.Title>
                    <Card.Text>
                      <small>Descrição curta...</small><br/>
                      R$ 90,00
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }} className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto">
                  <Card.Img variant="top" src="holder.js/25px45" />
                  <Card.Body>
                    <Card.Title><Nav.Link href="/" className="w-100">Nome do produto</Nav.Link></Card.Title>
                    <Card.Text>
                      <small>Descrição curta...</small><br/>
                      R$ 90,00
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }} className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto">
                  <Card.Img variant="top" src="holder.js/25px45" />
                  <Card.Body>
                    <Card.Title><Nav.Link href="/" className="w-100">Nome do produto</Nav.Link></Card.Title>
                    <Card.Text>
                      <small>Descrição curta...</small><br/>
                      R$ 90,00
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }} className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto">
                  <Card.Img variant="top" src="holder.js/25px45" />
                  <Card.Body>
                    <Card.Title><Nav.Link href="/" className="w-100">Nome do produto</Nav.Link></Card.Title>
                    <Card.Text>
                      <small>Descrição curta...</small><br/>
                      R$ 90,00
                    </Card.Text>
                  </Card.Body>
                </Card>

              </div>
            </div>
        </div>
        
      </div>
    </div>
  );
}
