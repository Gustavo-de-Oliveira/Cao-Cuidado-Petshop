import React from 'react';
// import NextLink from 'next/link';
import {
  Container,
  Image,
  Col,
  Row,
  Card,
  Button,
  Modal,
  Form,
} from 'react-bootstrap';

export default function adoption() {
  const [Show, setShow] = React.useState(false);

  return (
    <Container>
      <h1 className="text-center m-2">Adoção</h1>
      <h2 className="text-center m-2">Ajude-os a encontrar um lar </h2>
      <p className="text-center">
        Basta clicar em "Enviar um email", preencha o formulário e ligaremos
        marcando um horário para visitar o pet e para analisarmos a adoção
      </p>

      <div className="container-fluid text-center">
        <div className="col-12 row w-100">
          <Card
            style={{ width: '15rem' }}
            className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto"
          >
            <Card.Img variant="top" src="holder.js/25px45" />
            <Card.Body>
              <Card.Title>Nome do animal</Card.Title>
              <Card.Text>
                Um texto curto falando sobre ele, se é vacinado, idade etc...
              </Card.Text>
              <Button variant="primary" onClick={() => setShow(true)}>
                Mandar email
              </Button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: '15rem' }}
            className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto"
          >
            <Card.Img variant="top" src="holder.js/25px45" />
            <Card.Body>
              <Card.Title>Nome do animal</Card.Title>
              <Card.Text>
                Um texto curto falando sobre ele, se é vacinado, idade etc...
              </Card.Text>
              <Button variant="primary" onClick={() => setShow(true)}>
                Mandar email
              </Button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: '15rem' }}
            className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto"
          >
            <Card.Img variant="top" src="holder.js/25px45" />
            <Card.Body>
              <Card.Title>Nome do animal</Card.Title>
              <Card.Text>
                Um texto curto falando sobre ele, se é vacinado, idade etc...
              </Card.Text>
              <Button variant="primary" onClick={() => setShow(true)}>
                Mandar email
              </Button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: '15rem' }}
            className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto"
          >
            <Card.Img variant="top" src="holder.js/25px45" />
            <Card.Body>
              <Card.Title>Nome do animal</Card.Title>
              <Card.Text>
                Um texto curto falando sobre ele, se é vacinado, idade etc...
              </Card.Text>
              <Button variant="primary" onClick={() => setShow(true)}>
                Mandar email
              </Button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: '15rem' }}
            className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto"
          >
            <Card.Img variant="top" src="holder.js/25px45" />
            <Card.Body>
              <Card.Title>Nome do animal</Card.Title>
              <Card.Text>
                Um texto curto falando sobre ele, se é vacinado, idade etc...
              </Card.Text>
              <Button variant="primary" onClick={() => setShow(true)}>
                Mandar email
              </Button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: '15rem' }}
            className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto"
          >
            <Card.Img variant="top" src="holder.js/25px45" />
            <Card.Body>
              <Card.Title>Nome do animal</Card.Title>
              <Card.Text>
                Um texto curto falando sobre ele, se é vacinado, idade etc...
              </Card.Text>
              <Button variant="primary" onClick={() => setShow(true)}>
                Mandar email
              </Button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: '15rem' }}
            className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto"
          >
            <Card.Img variant="top" src="holder.js/25px45" />
            <Card.Body>
              <Card.Title>Nome do animal</Card.Title>
              <Card.Text>
                Um texto curto falando sobre ele, se é vacinado, idade etc...
              </Card.Text>
              <Button variant="primary" onClick={() => setShow(true)}>
                Mandar email
              </Button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: '15rem' }}
            className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto"
          >
            <Card.Img variant="top" src="holder.js/25px45" />
            <Card.Body>
              <Card.Title>Nome do animal</Card.Title>
              <Card.Text>
                Um texto curto falando sobre ele, se é vacinado, idade etc...
              </Card.Text>
              <Button variant="primary" onClick={() => setShow(true)}>
                Mandar email
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Modal
        size="lg"
        show={Show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
          <Form className="col-12">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nome completo</Form.Label>
                <Form.Control type="text" placeholder="Nome completo" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="email@email.com" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Telefone</Form.Label>
                <Form.Control type="cellphone" placeholder="(11) 91111-1111" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Complemento</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Estado</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Cidade</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>CEP</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Modal.Header>
      </Modal>
    </Container>
  );
}
