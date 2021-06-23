import React from 'react';
import NextImage from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faUser,
  faShoppingCart,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  Col,
  Row,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  InputGroup,
} from 'react-bootstrap';
import styles from './styles.module.css';
//import brandIcon from '../../../public/Logo_white.png';

export default function Header() {
  return (
    <>
      <header>
        <Navbar className={`${styles.bgNavbarUp}`} expand="lg">
          <Navbar.Brand href="/">
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll" className="">
            <Row className="col-lg-12">
              <InputGroup className="my-auto col-lg-5 col-md-7 rounded-0">
                <FormControl
                  className=""
                  placeholder="Pesquise algo em nosso site"
                  aria-label="Pesquise algo em nosso site"
                />
                <Button variant="" className={`btn ${styles.btnSearch}`}>
                  <FontAwesomeIcon width="15px" height="15px" icon={faSearch} />
                </Button>
              </InputGroup>

              <Container fluid className="col-lg-7 col-md-5 d-flex justify-content-end">
                <Nav.Link href="/" className={`col-lg-3 col-md-2 col-sm-1 mr-md-5 ${styles.topBtn}`}>
                  <FontAwesomeIcon icon={faUser} width="20px" height="20px" />
                  <span className="text-center"> Cadastro</span>
                </Nav.Link>

                <Nav.Link href="/" className={`col-lg-3 col-md-2 col-sm-1 ${styles.topBtn}`}>
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

        <Navbar className={`${styles.bgNavbarBottom}`} expand="lg">
          <Navbar.Toggle aria-controls="filterSection" className="">
            <FontAwesomeIcon width="15px" height="15px" icon={faFilter} />
          </Navbar.Toggle>

          <Navbar.Collapse id="filterSection">
            <Form className="col-lg-12">
              <Form.Row>
                <div className="col-lg-6 d-lg-flex">
                  <Col>
                    <Form.Control size="sm" as="select" className={`border-0 text-white ${styles.optGroup}`}>
                      <option className={`${styles.optGroupOpt}`} value="all">Cachorros</option>
                      <option className={`${styles.optGroupOpt}`} value="food">Ração</option>
                      <option className={`${styles.optGroupOpt}`} value="toys">Brinquedos</option>
                    </Form.Control>
                  </Col>

                  <Col>
                    <Form.Control size="sm" as="select" className={`border-0 text-white ${styles.optGroup}`} name="cats" id="cats">
                      <option value="all">Gatos</option>
                      <option value="food">Ração</option>
                      <option value="toys">Brinquedos</option>
                      <option value="toys">Areia sanitária</option>
                    </Form.Control>
                  </Col>

                  <Col>
                    <Form.Control size="sm" as="select" className={`border-0 text-white ${styles.optGroup}`} name="others" id="others" >
                      <option value="all">Outros pets</option>
                      <option value="food">Ração</option>
                      <option value="toys">Brinquedos</option>
                      <option value="toys">Areia sanitária</option>
                    </Form.Control>
                  </Col>

                  <Col>
                    <Form.Control size="sm" as="select" className={`border-0 text-white ${styles.optGroup}`} name="brands" id="brands" >
                      <option value="all">Marcas</option>
                    </Form.Control>
                  </Col>
                </div>

                <div className="border-right ml-lg-5" />

                <div className="col-lg-5 ml-lg-5 d-lg-flex">
                  <Nav.Link href="/" className={`pl-lg-5 text-white ${styles.navbarLink}`}>
                    Sobre o Cão Cuidado
                  </Nav.Link>

                  <Nav.Link href="/" className={`pl-lg-5 text-white ${styles.navbarLink}`}>
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
