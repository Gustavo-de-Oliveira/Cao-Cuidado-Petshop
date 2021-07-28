/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import Router from 'next/router';
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
  Badge,
} from 'react-bootstrap';
import Link from '../Link';
import styles from './styles.module.css';
import brandIcon from '../../../public/Logo_white.png';
import ProductsCart from '../../context/productsCart';

export default function Header() {
  const { cartItems, getTotalItems } = useContext(ProductsCart);

  const [smShow, setSmShow] = React.useState(false);
  const [hasLogin, setHasLogin] = React.useState(true);

  const [users, setUsers] = React.useState([]);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [passConfirm, setPassConfirm] = React.useState('');

  async function getUsers() {
    await fetch('http://localhost:8000/users').then(async (serverResponse) => {
      const response = await serverResponse.json();
      setUsers(response);
    });
  }

  function login(email) {
    let user = null;

    if (users) {
      user = users.find((user) => user.email === email);
      setSmShow(false);

      if (user) {
        setName(user.name);

        if (user.isAdmin) Router.push('/admin');
      } else {
        alert('Nenhum usuário encontrado');
      }
    }
  }

  async function createAccount() {
    setSmShow(false);

    if (email !== '' && name !== '' && pass === passConfirm && pass !== '') {
      await fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          name,
          email,
          password: pass,
          birthDate: new Date(),
          isAdmin: false,
          address: '',
          paymentMethods: [],
        }),
      });
    } else {
      setName('');
      setEmail('');
      setPass('');
      setPassConfirm('');
    }
  }

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <header className="mb-5">
        <Navbar className={`${styles.bgNavbarUp}`} expand="lg">
          <Link href="/">
            <NextImage src={brandIcon} alt="logo" width="95" height="67" />
            {/* <img
              src="http://placehold.it/100x70"
              alt="logo"
              width="95"
              height="67"
            /> */}
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
                  <span className="text-center"> Carrinho </span>
                </Link>
                <Badge
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--main_white)',
                    fontSize: '16px',
                    margin: 10,
                  }}
                >
                  {getTotalItems(cartItems) === 0
                    ? ''
                    : getTotalItems(cartItems)}
                </Badge>

                <Button
                  onClick={() => setSmShow(true)}
                  className={`btn bg-transparent border-0 col-lg-3 col-md-2 col-sm-1 mr-md-5 ${styles.topBtn}`}
                >
                  <FontAwesomeIcon icon={faUser} width="20px" height="20px" />
                  {name ? (
                    <span className="text-center">{name}</span>
                  ) : (
                    <span className="text-center"> Cadastro</span>
                  )}
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
                    href="/404"
                    className={`pl-lg-5 text-white ${styles.navbarLink}`}
                  >
                    FAQ
                  </Nav.Link>

                  <Nav.Link
                    href="/adoption"
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
                <Form.Control
                  type="email"
                  placeholder="Digite o email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Senha"
                  onChange={(event) => setPass(event.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={() => login(email, pass)}>
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
                  <Form.Control
                    type="text"
                    placeholder="Nome"
                    onChange={(event) => setName(event.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Form.Row} controlId="formHorizontalEmail">
                <Form.Label column sm={4}>
                  Email
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
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
                  <Form.Control
                    type="password"
                    placeholder="Senha"
                    onChange={(event) => setPass(event.target.value)}
                  />
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
                    onChange={(event) => setPassConfirm(event.target.value)}
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
                  <Button onClick={() => createAccount()}>Criar conta</Button>
                </Col>
              </Form.Group>
            </Form>
          </Modal.Header>
        </Modal>
      )}
    </>
  );
}
