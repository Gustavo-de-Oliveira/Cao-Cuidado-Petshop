import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Table, Modal, Form, Button, Tooltip } from 'react-bootstrap';

export default function admIndex() {
  //MODAL CONTROLLER
    const [showAdd, setShowAdd] = useState(false);
    const [showAdoption, setShowAdoption] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showEditAdoption, setShowEditAdoption] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showDeleteAdoption, setShowDeleteAdoption] = useState(false);

    const [showAddAdoption, setShowAddAdoption] = useState(false);
    const [showAddSale, setShowAddSale] = useState(false);

  //GENERAL
    const [products, setProducts] = useState([]);
    const [animals, setAnimals] = useState([]);
    const [user, setUser] = useState({});

    const [email, setEmail] = useState("");

    async function getProducts() {
      await fetch('http://localhost:8000/products').then(async (serverResponse) => {
        const response = await serverResponse.json();
        setProducts(response);
      });
    }

    async function getAnimals() {
      await fetch('http://localhost:8000/animals').then(async (serverResponse) => {
        const response = await serverResponse.json();
        setAnimals(response);
      });
    }

    async function createAdoption() {
      setShowAddAdoption(false);
      let animal = null;
      let user = null;

      if(email !== "" && animalName !== "") {
        await fetch(`http://localhost:8000/users/${email}`).then(async (serverResponse) => {
          const response = await serverResponse.json();
          setUser(response);
          user = response;
        });
        animal = animals.find(animal => animal.name && (animal.name).toLowerCase() === animalName.toLowerCase());
        console.log(animal);
        const response = await fetch('http://localhost:8000/adoptions', { method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            adopter: user._id,
            number: animals.length+1,
            createDate: new Date(),
            status: 'done',
            animal: animal._id,
          })
        });

        //Após adotar deleta o animal
        const del = await fetch(`http://localhost:8000/animals/${animal._id}`, { method: 'DELETE'})
        .then(res => res.json());
      }
    }

  //PRODUCTS FORM
    const [productId, setProductId] = useState("");
    const [productTitle, setProductTitle] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productBrand, setProductBrand] = useState("");
    const [salePrice, setSalePrice] = useState("");

    const [product, setProduct] = useState({});


  //ADOPTION FORM
    const [animalId, setAnimalId] = useState("");
    const [animalName, setAnimalName] = useState("");
    const [animalVaccines, setAnimalVaccines] = useState("");
    const [animalSpecie, setAnimalSpecie] = useState("");
    const [animalRace, setAnimalRace] = useState("");
    const [animalBirthDate, setAnimalBirthDate] = useState("");
    const [animalImage, setAnimalImage] = useState("");

    const [animal, setAnimal] = useState("");


  //FUNÇÕES CRUD PRODUTOS
    async function createProduct() {
      setShowAdd(false);

      if(productTitle !== "" && productQuantity !== "" && productPrice !== "" && productDescription !== "" && productBrand !== "") {
        const response = await fetch('http://localhost:8000/products', { method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            title: productTitle, 
            image: productImage,
            description: productDescription,
            realPrice: productPrice,
            salePrice: productPrice,
            onOffer: false,
            link: "nenhum",
            active: true,
            stock: productQuantity,
            brand: productBrand,
          })
        });

      } else {
        setProductTitle("");
        setProductImage("");
        setProductDescription("");
        setProductPrice("");
        setProductQuantity("");
        setProductBrand("");
      }
    }

    async function searchProduct() {
        await fetch(`http://localhost:8000/products/admin/${productId}`).then(async (serverResponse) => {
          const response = await serverResponse.json();
          setProduct(response);
          setProductTitle(response.title);
          setProductImage(response.image);
          setProductDescription(response.description);
          setProductPrice(response.realPrice);
          setSalePrice(response.salePrice);
          setProductQuantity(response.stock);
          setProductBrand(response.brand);
        });
    }

    async function editProduct() {
      setShowEdit(false);

      if(productTitle !== "" && productQuantity !== "" && productPrice !== "" && productDescription !== "" && productBrand !== "" && productImage !== "") {

        if(salePrice === "") salePrice = productPrice;

        const response = await fetch(`http://localhost:8000/products/${product._id}`, { method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            title: productTitle,
            image: productImage,
            description: productDescription,
            realPrice: productPrice,
            salePrice: salePrice,
            onOffer: false,
            link: "nenhum",
            active: true,
            stock: productQuantity,
            brand: productBrand,
          })
        });

      } else {
        setProductTitle("");
        setProductImage("");
        setProductDescription("");
        setProductPrice("");
        setProductQuantity("");
        setProductBrand("");
        setProductSale("");
      }
    }

    async function deleteProduct() {
      setShowDelete(false);

      if(product) {
        console.log(product);

        const response = await fetch(`http://localhost:8000/products/${product._id}`, { method: 'DELETE'})
        .then(res => res.json()) // or res.json()
        .then(res => alert(product.title + " excluido com sucesso!"));

      } else {
        setProductTitle("");
        setProductImage("");
        setProductDescription("");
        setProductPrice("");
        setProductQuantity("");
        setProductBrand("");
      }
    }


  //FUNÇÕES CRUD ANIMAIS
    async function createAnimal() {
      setShowAdoption(false);

      if(animalName !== "" && animalVaccines !== "" && animalSpecie !== "" && animalRace !== "" && animalBirthDate !== "" && animalImage !== "") {
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
            images: animalImage
          })
        });

      } else {
        setAnimalName("");
        setAnimalVaccines("");
        setAnimalSpecie("");
        setAnimalRace("");
        setAnimalBirthDate("");
        setAnimalImage("");
      }
    }

    async function searchAnimal() {
        await fetch(`http://localhost:8000/animals/admin/${animalId}`).then(async (serverResponse) => {
          const response = await serverResponse.json();

          setAnimal(response);
          setAnimalName(response.name);
          setAnimalVaccines(response.vaccines);
          setAnimalSpecie(response.specie);
          setAnimalRace(response.race);
          setAnimalBirthDate(response.birthDate);
          setAnimalImage(response.images);
        });
    }

    async function editAnimal() {
      setShowEditAdoption(false);

      if(animalName !== "" && animalVaccines !== "" && animalSpecie !== "" && animalRace !== "" && animalBirthDate !== "" && animalImage !== "") {

        const response = await fetch(`http://localhost:8000/animals/${animalId}`, { method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            name: animalName,
            specie: animalSpecie,
            race: animalRace,
            birthDate: animalBirthDate,
            vaccines: animalVaccines,
            images: animalImage
          })
        });

      } else {
        setAnimalName("");
        setAnimalVaccines("");
        setAnimalSpecie("");
        setAnimalRace("");
        setAnimalBirthDate("");
        setAnimalImage("");
      }
    }

    async function deleteAnimal() {
      setShowDeleteAdoption(false);

      if(product) {

        const response = await fetch(`http://localhost:8000/animals/${animal._id}`, { method: 'DELETE'})
        .then(res => res.json()) // or res.json()
        .then(res => alert(animal.name + " excluido com sucesso!"));

      } else {
        setAnimalName("");
        setAnimalVaccines("");
        setAnimalSpecie("");
        setAnimalRace("");
        setAnimalBirthDate("");
        setAnimalImage("");
      }
    }

  //FUNÇÕES ADICIONAR ADOÇÃO


  React.useEffect(() => {
      getProducts();
      getAnimals();
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
          Adicionar Animal
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
          Editar Animal
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
          Deletar Animal
        </button>
        <button
          type="button"
          className="m-2 btn btn-outline-success"
          onClick={() => setShowAddAdoption(true)}
        >
          Criar Adoção
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
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Link da Imagem</Form.Label>
                <Form.Control type="text" placeholder="link" onChange={event => setProductImage(event.target.value)}/>
              </Form.Group>
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

      {/* MODAL ADICIONAR ANIMAIS */}
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
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Link da Imagem</Form.Label>
                <Form.Control type="text" placeholder="link" onChange={event => setAnimalImage(event.target.value)}/>
              </Form.Group>
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
          <Form.Group as={Row} controlId="formHorizontalEmail" >
            <Form.Label column sm={5}>
              Buscar por ID
            </Form.Label>
            <Col sm={12} className="d-flex">
              <Form.Control type="text" placeholder="ID" onChange={event => setProductId(event.target.value)}/>
              <Button
                  variant="primary"
                  size="sm"
                  onClick={() => searchProduct()}
                > <FontAwesomeIcon width="15px" height="15px" icon={faSearch} /> </Button>
            </Col>
          </Form.Group>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Link da Imagem</Form.Label>
                <Form.Control type="text" placeholder="link" value={productImage} onChange={event => setProductImage(event.target.value)}/>
              </Form.Group>
            </Form.Row>
  
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" value={productTitle} onChange={event => setProductTitle(event.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Marca</Form.Label>
                <Form.Control type="text" placeholder="Marca" value={productBrand} onChange={event => setProductBrand(event.target.value)}/>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridQuantidade">
                <Form.Label>Quantidade em estoque</Form.Label>
                <Form.Control type="number" placeholder="Quantidade" value={productQuantity} onChange={event => setProductQuantity(event.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPrice">
                <Form.Label>Preço</Form.Label>
                <Form.Control type="number" placeholder="R$" value={productPrice} onChange={event => setProductPrice(event.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPrice">
                <Form.Label>
                  Preço em promoção
                 </Form.Label>
                <Form.Control type="number" placeholder="R$" value={salePrice} onChange={event => setSalePrice(event.target.value)}/>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descrição</Form.Label>
                <Form.Control as="textarea" rows={5} cols={80} value={productDescription} onChange={event => setProductDescription(event.target.value)}/>
              </Form.Group>
            </Form.Row>

            <Row>
              <Col>
                <Button variant="primary" size="lg" block  onClick={() => editProduct()}>
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

      {/* MODAL EDITAR ANIMAIS */}
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
            <Col sm={12} className="d-flex">
              <Form.Control type="text" placeholder="ID" onChange={event => setAnimalId(event.target.value)}/>
              <Button
                  variant="primary"
                  size="sm"
                  onClick={() => searchAnimal()}
                > <FontAwesomeIcon width="15px" height="15px" icon={faSearch} /> </Button>
            </Col>
          </Form.Group>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Link da Imagem</Form.Label>
                <Form.Control type="text" placeholder="link" value={animalImage} onChange={event => setAnimalImage(event.target.value)}/>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" value={animalName} onChange={event => setAnimalName(event.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control type="text" placeholder="birthday" value={animalBirthDate} onChange={event => setAnimalBirthDate(event.target.value)}/>
              </Form.Group>
            </Form.Row>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Vacinas</Form.Label>
              <Form.Control type="text" placeholder="Vacinas" value={animalVaccines} onChange={event => setAnimalVaccines(event.target.value)}/>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Raça</Form.Label>
                <Form.Control type="text" placeholder="race" value={animalRace} onChange={event => setAnimalRace(event.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Especie</Form.Label>
                <Form.Control type="text" placeholder="specie" value={animalSpecie} onChange={event => setAnimalSpecie(event.target.value)}/>
              </Form.Group>
            </Form.Row>

            <Row>
              <Col>
                <Button variant="primary" size="lg" block onClick={() => editAnimal()}>
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
            <Col sm={12} className="d-flex">
              <Form.Control type="text" placeholder="ID" onChange={event => setProductId(event.target.value)}/>
              <Button
                  variant="primary"
                  size="sm"
                  onClick={() => searchProduct()}
                > <FontAwesomeIcon width="15px" height="15px" icon={faSearch} /> </Button>
            </Col>
          </Form.Group>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" value={productTitle} onChange={event => setProductTitle(event.target.value)} disabled/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Marca</Form.Label>
                <Form.Control type="text" placeholder="Marca" value={productBrand} onChange={event => setProductBrand(event.target.value)} disabled/>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridQuantidade">
                <Form.Label>Quantidade em estoque</Form.Label>
                <Form.Control type="number" placeholder="Quantidade" value={productQuantity} onChange={event => setProductQuantity(event.target.value)} disabled/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPrice">
                <Form.Label>Preço</Form.Label>
                <Form.Control type="number" placeholder="price" value={productPrice} onChange={event => setProductPrice(event.target.value)} disabled/>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descrição</Form.Label>
                <Form.Control as="textarea" rows={5} cols={80} value={productDescription} onChange={event => setProductDescription(event.target.value)} disabled/>
              </Form.Group>
            </Form.Row>

            <Row>
              <Col>
                <Button variant="primary" size="lg" block  onClick={() => deleteProduct()}>
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

      {/* MODAL DELETAR ANIMAIS */}
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
            <Col sm={12} className="d-flex">
              <Form.Control type="text" placeholder="ID" onChange={event => setAnimalId(event.target.value)}/>
              <Button
                  variant="primary"
                  size="sm"
                  onClick={() => searchAnimal()}
                > <FontAwesomeIcon width="15px" height="15px" icon={faSearch} /> </Button>
            </Col>
          </Form.Group>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" value={animalName} onChange={event => setAnimalName(event.target.value)} disabled/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control type="text" placeholder="birthday" value={animalBirthDate} onChange={event => setAnimalBirthDate(event.target.value)} disabled/>
              </Form.Group>
            </Form.Row>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Vacinas</Form.Label>
              <Form.Control type="text" placeholder="Vacinas" value={animalVaccines} onChange={event => setAnimalVaccines(event.target.value)} disabled/>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Raça</Form.Label>
                <Form.Control type="text" placeholder="race" value={animalRace} onChange={event => setAnimalRace(event.target.value)} disabled/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Especie</Form.Label>
                <Form.Control type="text" placeholder="specie" value={animalSpecie} onChange={event => setAnimalSpecie(event.target.value)} disabled/>
              </Form.Group>
            </Form.Row>

            <Row>
              <Col>
                <Button variant="primary" size="lg" block onClick={() => deleteAnimal()}>
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


      {/* MODAL ADICIONAR ADOÇÃO */}
      <Modal
        size="lg"
        show={showAddAdoption}
        onHide={() => setShowAddAdoption(false)}
        aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header>
          <h2>Adicionar Adoção</h2>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nome do animal</Form.Label>
                <Form.Control type="text" placeholder="Nome" onChange={event => setAnimalName(event.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Email do Adotador</Form.Label>
                <Form.Control type="email" placeholder="email" onChange={event => setEmail(event.target.value)}/>
              </Form.Group>
            </Form.Row>

            <Row>
              <Col>
                <Button variant="primary" size="lg" block  onClick={() => createAdoption()}>
                  Salvar
                </Button>
              </Col>

              <Col>
                <Button
                  variant="danger"
                  size="lg"
                  block
                  onClick={() => setShowAddAdoption(false)}
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
