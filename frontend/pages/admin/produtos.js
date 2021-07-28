import React, { useState } from 'react';
import { Col, Row, Table, Modal, Form, Button } from 'react-bootstrap';

export default function admIndex() {
  //MODAL CONTROLLER
  const [showAdd, setShowAdd] = useState(false);
  const [showAdoption, setShowAdoption] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showEditAdoption, setShowEditAdoption] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showDeleteAdoption, setShowDeleteAdoption] = useState(false);

  //GENERAL
    const [products, setProducts] = useState([]);

  //PRODUCTS FORM
    const [productId, setProductId] = useState("");
    const [productTitle, setProductTitle] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productBrand, setProductBrand] = useState("");

  //ADOPTION FORM
    const [animalId, setAnimalId] = useState("");
    const [animalName, setAnimalName] = useState("");
    const [animalVaccines, setAnimalVaccines] = useState("");
    const [animalSpecie, setAnimalSpecie] = useState("");
    const [animalRace, setAnimalRace] = useState("");
    const [animalBirthDate, setAnimalBirthDate] = useState("");


  async function getProducts() {
    await fetch('http://localhost:8000/products').then(async (serverResponse) => {
      const response = await serverResponse.json();
      setProducts(response);
    });
  }

  async function createAnimal() {
    setShowAdoption(false);

    if(animalName !== "" && animalVaccines !== "" && animalSpecie !== "" && animalRace !== "" && animalBirthDate !== "") {
      const response = await fetch('http://localhost:8000/animals', { method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          name: animalName,
          specie: animalSpecie,
          race: animalRace,
          birthDate: animalBirthDate,
          vaccines: animalVaccines,
          images: ""
        })
      });

    } else {
      setAnimalName("");
      setAnimalVaccines("");
      setAnimalSpecie("");
      setAnimalRace("");
      setAnimalBirthDate("");
    }
  }

  async function createProduct() {
    setShowAdd(false);

    if(productTitle !== "" && productQuantity !== "" && productPrice !== "" && productDescription !== "" && productBrand !== "") {
      const response = await fetch('http://localhost:8000/products', { method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          title: productTitle, 
          image: "nopath",
          description: productDescription,
          realPrice: productPrice,
          salePrice: productPrice,
          onOffer: false,
          link: "nenhum",
          active: true,
          stock: productQuantity,
          images: "",
          brand: productBrand,
        })
      });

    } else {
      setProductTitle("");
      setProductDescription("");
      setProductPrice("");
      setProductQuantity("");
      setProductBrand("");
    }
  }

  React.useEffect(() => {
      getProducts();
  }, [])

  const listItems = products.map((product) =>  
    <tr key={product._id}>
      <td>{product._id}</td>
      <td>{product.title}</td>
      <td>{product.stock}</td>
      <td>{product.realPrice}</td>
      <td>{product.salePrice}</td>
      <td>{product.onOffer}</td>
    </tr>
  ) || [];

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
            <th>Quantidade</th>
            <th>Preço(R$)</th>
            <th>Preço na promoção(R$)</th>
            <th>Em Oferta?</th>
          </tr>
        </thead>

        <tbody>
          {listItems}
        </tbody>
      </Table>

      {/* MODAL ADICIONAR PRODUTOS */}
      <Modal
        size="lg"
        show={showAdd}
        onHide={() => setShowAdd(false)}
        aria-labelledby="example-modal-sizes-title-sm">
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
                <Form.Control type="text" placeholder="Nome" onChange={event => setProductTitle(event.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Marca</Form.Label>
                <Form.Control type="text" placeholder="Marca" onChange={event => setProductBrand(event.target.value)}/>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridQuantidade">
                <Form.Label>Quantidade em estoque</Form.Label>
                <Form.Control type="number" placeholder="Quantidade" onChange={event => setProductQuantity(event.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPrice">
                <Form.Label>Preço</Form.Label>
                <Form.Control type="number" placeholder="price" onChange={event => setProductPrice(event.target.value)}/>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descrição</Form.Label>
                <Form.Control as="textarea" rows={5} cols={80} onChange={event => setProductDescription(event.target.value)}/>
              </Form.Group>
            </Form.Row>

            <Row>
              <Col>
                <Button variant="primary" size="lg" block  onClick={() => createProduct()}>
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
        aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header>
          <h2>Adicionar animal para adoção</h2>
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
                <Form.Control type="text" placeholder="Nome" onChange={event => setAnimalName(event.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control type="date" placeholder="birthday" onChange={event => setAnimalBirthDate(event.target.value)}/>
              </Form.Group>
            </Form.Row>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Vacinas</Form.Label>
              <Form.Control type="text" placeholder="Vacinas" onChange={event => setAnimalVaccines(event.target.value)}/>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Raça</Form.Label>
                <Form.Control type="text" placeholder="race" onChange={event => setAnimalRace(event.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Especie</Form.Label>
                <Form.Control type="text" placeholder="specie" onChange={event => setAnimalSpecie(event.target.value)}/>
              </Form.Group>
            </Form.Row>

            <Row>
              <Col>
                <Button variant="primary" size="lg" block onClick={() => createAnimal()}>
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
        aria-labelledby="example-modal-sizes-title-sm">
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
        aria-labelledby="example-modal-sizes-title-sm">
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
        aria-labelledby="example-modal-sizes-title-sm">
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
        aria-labelledby="example-modal-sizes-title-sm">
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
