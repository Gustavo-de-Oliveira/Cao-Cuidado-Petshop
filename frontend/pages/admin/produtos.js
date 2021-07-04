import React, { useState } from 'react';
import { Col, Row, Table, Modal, Form, Button } from 'react-bootstrap';
import products from '../../public/products.json';

export default function admIndex() {
  const [showAdd, setShowAdd] = useState(false);
  const [showAdoption, setShowAdoption] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showEditAdoption, setShowEditAdoption] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showDeleteAdoption, setShowDeleteAdoption] = useState(false);

  return (
    <div>
      <h1 className="text-center mx-auto">Tela de estoque</h1>

      <div className="float-lg-right float-md-left">
        <button
          type="button"
          className="m-2 btn btn-outline-primary"
          onClick={() => setShowAdd(true)}
        >
          Adicionar Produto
        </button>
        <button
          type="button"
          className="m-2 btn btn-outline-primary"
          onClick={() => setShowAdoption(true)}
        >
          Adicionar Adoção
        </button>
        <button
          type="button"
          className="m-2 btn btn-outline-warning"
          onClick={() => setShowEdit(true)}
        >
          Editar Produto
        </button>
        <button
          type="button"
          className="m-2 btn btn-outline-warning"
          onClick={() => setShowEditAdoption(true)}
        >
          Editar Adoção
        </button>
        <button
          type="button"
          className="m-2 btn btn-outline-danger"
          onClick={() => setShowDelete(true)}
        >
          Deletar Produto
        </button>
        <button
          type="button"
          className="m-2 btn btn-outline-danger"
          onClick={() => setShowDeleteAdoption(true)}
        >
          Deletar Adoção
        </button>
      </div>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            {/* <th>Quantidade</th> */}
            <th>Preço(R$)</th>
            <th>Preço na promoção(R$)</th>
          </tr>
        </thead>

        <tbody>
          {products.data.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                {/* <td>34</td> */}
                <td>{product.oldPrice}</td>
                <td>{product.newPrice}</td>
              </tr>
            );
          })}
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
          <h2>Adicionar Produto</h2>
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

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Validade</Form.Label>
                <Form.Control type="date" placeholder="date" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridQuantidade">
                <Form.Label>Quantidade em estoque</Form.Label>
                <Form.Control type="number" placeholder="Quantidade" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPrice">
                <Form.Label>Preço</Form.Label>
                <Form.Control type="number" placeholder="price" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridCodBar">
              <Form.Label>Código de barras</Form.Label>
              <Form.Control type="number" placeholder="Código de barras" />
            </Form.Group>

            <Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descrição</Form.Label>
                <Form.Control as="textarea" rows={5} cols={80} />
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

      {/* MODAL ADICIONAR ADOÇÕES */}
      <Modal
        size="lg"
        show={showAdoption}
        onHide={() => setShowAdd(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
          <h2>Adicionar Adoção</h2>
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

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control type="date" placeholder="birthday" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Vacinado" />
            </Form.Group>

            <Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descrição</Form.Label>
                <Form.Control as="textarea" rows={5} cols={80} />
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
                  onClick={() => setShowAdoption(false)}
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

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Validade</Form.Label>
                <Form.Control type="date" placeholder="date" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridQuantidade">
                <Form.Label>Quantidade em estoque</Form.Label>
                <Form.Control type="number" placeholder="Quantidade" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPrice">
                <Form.Label>Preço</Form.Label>
                <Form.Control type="number" placeholder="price" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridCodBar">
              <Form.Label>Código de barras</Form.Label>
              <Form.Control type="number" placeholder="Código de barras" />
            </Form.Group>

            <Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descrição</Form.Label>
                <Form.Control as="textarea" rows={5} cols={80} />
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
                  onClick={() => setShowEdit(false)}
                >
                  Cancelar
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>

      {/* MODAL EDITAR ADOÇÕES */}
      <Modal
        size="lg"
        show={showEditAdoption}
        onHide={() => setShowEditAdoption(false)}
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

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control type="date" placeholder="birthday" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Vacinado" />
            </Form.Group>

            <Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descrição</Form.Label>
                <Form.Control as="textarea" rows={5} cols={80} />
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
                  onClick={() => setShowEditAdoption(false)}
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

            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" disabled placeholder="Nome" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Validade</Form.Label>
                <Form.Control type="date" placeholder="date" disabled />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridQuantidade">
                <Form.Label>Quantidade em estoque</Form.Label>
                <Form.Control type="number" placeholder="Quantidade" disabled />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPrice">
                <Form.Label>Preço</Form.Label>
                <Form.Control type="number" placeholder="price" disabled />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridCodBar">
              <Form.Label>Código de barras</Form.Label>
              <Form.Control
                type="number"
                placeholder="Código de barras"
                disabled
              />
            </Form.Group>

            <Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descrição</Form.Label>
                <Form.Control as="textarea" rows={5} cols={80} disabled />
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
                  onClick={() => setShowDelete(false)}
                >
                  Cancelar
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>

      {/* MODAL DELETAR ADOÇÕES */}
      <Modal
        size="lg"
        show={showDeleteAdoption}
        onHide={() => setShowDeleteAdoption(false)}
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
                disabled
              />
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" disabled />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control type="date" placeholder="birthday" disabled />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Vacinado" disabled />
            </Form.Group>

            <Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descrição</Form.Label>
                <Form.Control as="textarea" rows={5} cols={80} disabled />
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
                  onClick={() => setShowDeleteAdoption(false)}
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
