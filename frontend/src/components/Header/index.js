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
  Modal,
} from 'react-bootstrap';
import Link from '../Link';
import styles from './styles.module.css';
import brandIcon from '../../../public/Logo_white.png';

export default function Header() {
  const [smShow, setSmShow] = React.useState(false);
  const [hasLogin, setHasLogin] = React.useState(true);

  return (
    <>
      <header className="mb-5">
        <Navbar className={`${styles.bgNavbarUp}`} expand="lg">
          <Link href="/">
            <NextImage src={brandIcon} alt="logo" width="95" height="67" />
            {/* <img src={brandIcon.src} alt="logo" width="95" height="67" /> */}
          </Link>

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

              <Container
                fluid
                className="col-lg-7 col-md-5 d-flex justify-content-end"
              >
                <Link
                  color="var(--main_white)"
                  href="/cart"
                  className={`col-lg-3 col-md-2 col-sm-1 ${styles.topBtn}`}
                >
                  <FontAwesomeIcon
                    width="20px"
                    height="20px"
                    icon={faShoppingCart}
                  />
                  <span className="text-center"> Carrinho</span>
                </Link>

                <Button
                  onClick={() => setSmShow(true)}
                  className={`btn bg-transparent border-0 col-lg-3 col-md-2 col-sm-1 mr-md-5 ${styles.topBtn}`}
                >
                  <FontAwesomeIcon icon={faUser} width="20px" height="20px" />
                  <span className="text-center"> Cadastro</span>
                </Button>
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
                    <Form.Control
                      size="sm"
                      as="select"
                      className={`border-0 text-white ${styles.optGroup}`}
                    >
                      <option className={`${styles.optGroupOpt}`} value="all">
                        Cachorros
                      </option>
                      <option className={`${styles.optGroupOpt}`} value="food">
                        Ração
                      </option>
                      <option className={`${styles.optGroupOpt}`} value="toys">
                        Brinquedos
                      </option>
                    </Form.Control>
                  </Col>

                  <Col>
                    <Form.Control
                      size="sm"
                      as="select"
                      className={`border-0 text-white ${styles.optGroup}`}
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
                      className={`border-0 text-white ${styles.optGroup}`}
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
                      className={`border-0 text-white ${styles.optGroup}`}
                      name="brands"
                      id="brands"
                    >
                      <option value="all">Marcas</option>
                    </Form.Control>
                  </Col>
                </div>

                <div className="border-right ml-lg-5" />

                <div className="col-lg-5 ml-lg-5 d-lg-flex">
                  <Nav.Link
                    href="/about"
                    className={`pl-lg-5 text-white ${styles.navbarLink}`}
                  >
                    Sobre Cão cuidado
                  </Nav.Link>

                  <Nav.Link
                    className={`pl-lg-5 text-white ${styles.navbarLink}`}
                  >
                    FAQ
                  </Nav.Link>

                  <Nav.Link
                    className={`pl-lg-5 text-white ${styles.navbarLink}`}
                  >
                    Adoção
                  </Nav.Link>
                </div>
              </Form.Row>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </header>

      {hasLogin ? (
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header>
            <Form className="text-center mx-auto">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Digite o email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Senha" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Entrar
              </Button>
            </Form>
          </Modal.Header>

          <Modal.Body>
            <Form.Text className="text-muted">
              <Button variant="link" onClick={() => setHasLogin(false)}>
                Não tenho uma conta, quero me cadastrar!
              </Button>
            </Form.Text>
          </Modal.Body>
        </Modal>
      ) : (
        <Modal
          size="md"
          show={smShow}
          onHide={() => {
            setSmShow(false);
            setHasLogin(true);
          }}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header className="col-12">
            <Form>
              <Form.Group as={Form.Row} controlId="formHorizontalEmail">
                <Form.Label column sm={4}>
                  Nome
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="text" placeholder="Nome" />
                </Col>
              </Form.Group>

              <Form.Group as={Form.Row} controlId="formHorizontalEmail">
                <Form.Label column sm={4}>
                  Email
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="email" placeholder="Email" />
                </Col>

                <Form.Text className="text-muted">
                  Nunca compartilharemos seus dados com terceiros!
                </Form.Text>
              </Form.Group>

              <Form.Group as={Form.Row} controlId="formHorizontalPassword">
                <Form.Label column sm={4}>
                  Senha
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="password" placeholder="Senha" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Form.Row}
                controlId="formHorizontalConfirmPassword"
              >
                <Form.Label column sm={4}>
                  Repita sua senha
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="password"
                    placeholder="Repita sua senha"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Form.Row} controlId="formHorizontalCheck">
                <Col sm={{ span: 10, offset: 0 }}>
                  <Form.Check label="Lembrar de mim" />
                </Col>
              </Form.Group>

              <Form.Group as={Form.Row}>
                <Col sm={{ span: 10, offset: 3 }}>
                  <Button type="submit">Criar conta</Button>
                </Col>
              </Form.Group>
            </Form>
          </Modal.Header>
        </Modal>
      )}
    </>
  );
}
