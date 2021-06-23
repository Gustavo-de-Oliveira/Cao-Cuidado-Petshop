import React from 'react';
import NextLink from 'next/link';
// import headerIcon from '../../src/images/Logo_white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faUser,
  faShoppingCart,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  Image,
  Col,
  Row,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  InputGroup,
} from 'react-bootstrap';

export default function Header() {
  return (
    <>
      <header>
        <Navbar bg="dark">
          <Navbar.Brand href="/">
            <img
              src="../../../public/Logo_white.png"
              className="align-top"
              width="50px"
              height="50px"
              alt="img"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll" className="">
            <Row className="col-lg-12">
              <InputGroup className="my-auto col-lg-5 col-md-7 rounded-0">
                <FormControl
                  className=""
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                />
                <Button variant="outline-primary" className="rounded-0">
                  <FontAwesomeIcon width="15px" height="15px" icon={faSearch} />
                </Button>
              </InputGroup>

              <Container
                fluid
                className="col-lg-7 col-md-5 d-flex justify-content-end"
              >
                <Nav.Link
                  href="/"
                  className="col-lg-3 col-md-2 col-sm-1 mr-md-5"
                >
                  <FontAwesomeIcon icon={faUser} width="20px" height="20px" />
                  <span className="text-center"> Cadastro</span>
                </Nav.Link>

                <Nav.Link href="/" className="col-lg-3 col-md-2 col-sm-1">
                  <FontAwesomeIcon
                    width="20px"
                    height="20px"
                    icon={faShoppingCart}
                  />
                  <span className="text-center"> Carrinho</span>
                </Nav.Link>
              </Container>
            </Row>
          </Navbar.Collapse>
        </Navbar>

        <Navbar bg="dark" expand="lg" className="">
          <Navbar.Toggle aria-controls="filterSection" className="">
            <FontAwesomeIcon width="15px" height="15px" icon={faFilter} />
          </Navbar.Toggle>

          <Navbar.Collapse id="filterSection">
            <Form className="col-lg-12">
              <Form.Row>
                <div className="col-lg-6 d-lg-flex">
                  <Col>
                    <Form.Control
                      size="sm"
                      as="select"
                      className="bg-dark border-0 text-white"
                    >
                      <option value="all">Cachorros</option>
                      <option value="food">Ração</option>
                      <option value="toys">Brinquedos</option>
                    </Form.Control>
                  </Col>

                  <Col>
                    <Form.Control
                      size="sm"
                      as="select"
                      className="bg-dark border-0 text-white"
                      name="cats"
                      id="cats"
                    >
                      <option value="all">Gatos</option>
                      <option value="food">Ração</option>
                      <option value="toys">Brinquedos</option>
                      <option value="toys">Areia sanitária</option>
                    </Form.Control>
                  </Col>

                  <Col>
                    <Form.Control
                      size="sm"
                      as="select"
                      className="bg-dark border-0 text-white"
                      name="others"
                      id="others"
                    >
                      <option value="all">Outros pets</option>
                      <option value="food">Ração</option>
                      <option value="toys">Brinquedos</option>
                      <option value="toys">Areia sanitária</option>
                    </Form.Control>
                  </Col>

                  <Col>
                    <Form.Control
                      size="sm"
                      as="select"
                      className="bg-dark border-0 text-white"
                      name="brands"
                      id="brands"
                    >
                      <option value="all">Marcas</option>
                    </Form.Control>
                  </Col>
                </div>

                <div className="border-right ml-lg-5" />

                <div className="col-lg-5 ml-lg-5 d-lg-flex">
                  <Nav.Link href="/" className="pl-lg-5 text-white">
                    Sobre o Cão Cuidado
                  </Nav.Link>

                  <Nav.Link href="/" className="pl-lg-5 text-white">
                    FAQ
                  </Nav.Link>
                </div>
              </Form.Row>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
}

/*
TODO:
	CSS
	-Ajustar cores
	-Ajustar tamanhos de botões
	-Ajustar margem topo do filterSection
	-Ajustar z-index do header em relação ao filterSection
	-Adicionar logo
	-Mudar background do dropdown(webkit)
*/
