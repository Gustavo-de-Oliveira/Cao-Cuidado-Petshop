import React from 'react';
import { Col, Row, Table, Modal, Form, Button } from 'react-bootstrap';

export default function admIndex() {
  const [showAdd, setShowAdd] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [showDelete, setShowDelete] = React.useState(false);

  return (
    <div>
      <h1 className="text-center mx-auto">Controle de usuários</h1>

      <div className="float-lg-right float-md-left">
        <button
          type="button"
          className="m-2 btn btn-outline-primary"
          onClick={() => setShowAdd(true)}
        >
          Adicionar usuário
        </button>
        <button
          type="button"
          className="m-2 btn btn-outline-warning"
          onClick={() => setShowEdit(true)}
        >
          Editar usuário
        </button>
        <button
          type="button"
          className="m-2 btn btn-outline-danger"
          onClick={() => setShowDelete(true)}
        >
          Deletar usuário
        </button>
      </div>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>e-mail</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Pedro</td>
            <td>pedro@gmail.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Maria</td>
            <td>maria@gmail.com</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Robertinho</td>
            <td>littleroberto@yahoo.com</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Claudia</td>
            <td>clauclau@bol.com.br</td>
          </tr>
        </tbody>
      </Table>

      {/* MODAL ADICIONAR PRODUTOS */}
      <Modal
        size="lg"
        show={showAdd}
        onHide={() => setShowAdd(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
          <h2>Adicionar usuário</h2>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.File
                className="position-relative"
                required
                name="file"
                label="Foto"
                id="validationFormik107"
                feedbackTooltip
              />
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridQuantidade">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
            </Form.Row>

            <Row>
              <Col>
                <Button variant="primary" size="lg" block>
                  Salvar
                </Button>
              </Col>

              <Col>
                <Button
                  variant="danger"
                  size="lg"
                  block
                  onClick={() => setShowAdd(false)}
                >
                  Cancelar
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>

      {/* MODAL EDITAR PRODUTOS */}
      <Modal
        size="lg"
        show={showEdit}
        onHide={() => setShowEdit(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={5}>
              Buscar por ID
            </Form.Label>
            <Col sm={5}>
              <Form.Control type="number" placeholder="ID" />
            </Col>
          </Form.Group>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.File
                className="position-relative"
                required
                name="file"
                label="Foto"
                id="validationFormik107"
                feedbackTooltip
              />
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridQuantidade">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
            </Form.Row>

            <Row>
              <Col>
                <Button variant="primary" size="lg" block>
                  Salvar
                </Button>
              </Col>

              <Col>
                <Button
                  variant="danger"
                  size="lg"
                  block
                  onClick={() => setShowAdd(false)}
                >
                  Cancelar
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>

      {/* MODAL DELETAR PRODUTOS */}
      <Modal
        size="lg"
        show={showDelete}
        onHide={() => setShowDelete(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={5}>
              Buscar por ID
            </Form.Label>
            <Col sm={5}>
              <Form.Control type="number" placeholder="ID" />
            </Col>
          </Form.Group>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.File
                disabled
                className="position-relative"
                required
                name="file"
                label="Foto"
                id="validationFormik107"
                feedbackTooltip
              />
            </Form.Row>

            <Row>
              <Col>
                <Button variant="primary" size="lg" block>
                  Salvar
                </Button>
              </Col>

              <Col>
                <Button
                  variant="danger"
                  size="lg"
                  block
                  onClick={() => setShowDelete(false)}
                >
                  Cancelar
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
