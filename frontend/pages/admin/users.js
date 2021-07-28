import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Table, Modal, Form, Button } from 'react-bootstrap';

export default function admIndex() {
  //MODAL CONTROLLE
    const [showAdd, setShowAdd] = React.useState(false);
    const [showEdit, setShowEdit] = React.useState(false);
    const [showDelete, setShowDelete] = React.useState(false);

  //USER FORM
    const [userId, setUserId] = React.useState("");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [birthDate, setBirthDate] = React.useState("");
    const [state, setState] = React.useState("");
    const [city, setCity] = React.useState("");
    const [street, setStreet] = React.useState("");
    const [isAdmin, setIsAdmin] = React.useState("");



  //FUNÇÕES CRUD USER
  async function createUser() {
    setShowAdd(false);

    if(name !== "" && email !== "" && password !== "" && birthDate !== "" && state !== "" && city !== "" && street !== "") {
      const response = await fetch('http://localhost:8000/users', { method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          birthDate: birthDate,
          isAdmin: true,
          address: {
              state: state,
              city: city,
              street: street,
          },

        })
      });

    }
  
    setName("");
    setEmail("");
    setPassword("");
    setBirthDate("");
    setState("");
    setCity("");  
    setStreet("");  
  }

  async function searchUser() {
      await fetch(`http://localhost:8000/users/admin/${userId}`).then(async (serverResponse) => {
        const response = await serverResponse.json();

        setName(response.name);
        setEmail(response.email);
        setPassword(response.password);
        setBirthDate(response.birthDate);
        setState(response.address.state);
        setCity(response.address.city);
        setStreet(response.address.street);
        setIsAdmin(response.isAdmin);
      });
  }

  async function editUser() {
    setShowEdit(false);

    if(name !== "" && email !== "" && password !== "" && birthDate !== "" && state !== "" && city !== "" && street !== "") {
      const response = await fetch(`http://localhost:8000/users/${userId}`, { method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          birthDate: birthDate,
          isAdmin: isAdmin,
          address: {
              state: state,
              city: city,
              street: street,
          },

        })
      });

    }
  
    setName("");
    setEmail("");
    setPassword("");
    setBirthDate("");
    setState("");
    setCity("");  
    setStreet("");  
  }

  async function deleteUser() {
    setShowDelete(false);

    if(name) {

      const response = await fetch(`http://localhost:8000/users/${userId}`, { method: 'DELETE'})
      .then(res => res.json()) // or res.json()
      .then(res => alert(name + " excluido com sucesso!"));

    }

    setUserId("");
    setName("");
    setEmail("");
    setPassword("");
    setBirthDate("");
    setState("");
    setCity("");  
    setStreet("");
  }



  const [users, setUsers] = React.useState([]);
  async function getUsers() {
    await fetch('http://localhost:8000/users').then(async (serverResponse) => {
      const response = await serverResponse.json();
      setUsers(response);
    });
  }

  React.useEffect(() => {
      getUsers();
  }, [])

  const listItems = users.map((user) =>  
    <tr key={user._id}>
      <td>{user._id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  ) || [];

  return (
    <div>
      <h1 className="text-center mx-auto">Controle de usuários</h1>

      <div className="float-lg-right float-md-left">
        <button
          type="button"
          className="m-2 btn btn-outline-primary"
          onClick={() => setShowAdd(true)}>
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
          {listItems}
        </tbody>
      </Table>

      {/* MODAL ADICIONAR USUARIO */}
      <Modal
        size="lg"
        show={showAdd}
        onHide={() => setShowAdd(false)}
        aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header>
          <h2>Adicionar novo usuário</h2>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" onChange={event => setName(event.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control type="date" placeholder="birthday" onChange={event => setBirthDate(event.target.value)}/>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="email" onChange={event => setEmail(event.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="password" onChange={event => setPassword(event.target.value)}/>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Estado</Form.Label>
                <Form.Control type="text" placeholder="SP" onChange={event => setState(event.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Cidade</Form.Label>
                <Form.Control type="text" placeholder="São Paulo" onChange={event => setCity(event.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Rua</Form.Label>
                <Form.Control type="text" placeholder="Rua xxxxxxx nº000" onChange={event => setStreet(event.target.value)}/>
              </Form.Group>
            </Form.Row>

            <Row>
              <Col>
                <Button variant="primary" size="lg" block onClick={() => createUser()}>
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
        aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={5}>
              Buscar por ID
            </Form.Label>
            <Col sm={12} className="d-flex">
              <Form.Control type="text" placeholder="ID" onChange={event => setUserId(event.target.value)}/>
              <Button
                  variant="primary"
                  size="sm"
                  onClick={() => searchUser()}
                > <FontAwesomeIcon width="15px" height="15px" icon={faSearch} /> </Button>
            </Col>
          </Form.Group>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" value={name} onChange={event => setName(event.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control type="date" placeholder="birthday" value={birthDate} onChange={event => setBirthDate(event.target.value)}/>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="email" value={email} onChange={event => setEmail(event.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="password" value={password} onChange={event => setPassword(event.target.value)}/>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Estado</Form.Label>
                <Form.Control type="text" placeholder="SP" value={state} onChange={event => setState(event.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Cidade</Form.Label>
                <Form.Control type="text" placeholder="São Paulo" value={city} onChange={event => setCity(event.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Rua</Form.Label>
                <Form.Control type="text" placeholder="Rua xxxxxxx nº000" value={street} onChange={event => setStreet(event.target.value)}/>
              </Form.Group>
            </Form.Row>

            <Row>
              <Col>
                <Button variant="primary" size="lg" block onClick={() => editUser()}>
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
              <Form.Control type="text" placeholder="ID" onChange={event => setUserId(event.target.value)}/>
              <Button
                  variant="primary"
                  size="sm"
                  onClick={() => searchUser()}
                > <FontAwesomeIcon width="15px" height="15px" icon={faSearch} /> </Button>
            </Col>
          </Form.Group>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" value={name} onChange={event => setName(event.target.value)} disabled/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control type="date" placeholder="birthday" value={birthDate} onChange={event => setBirthDate(event.target.value)} disabled/>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="email" value={email} onChange={event => setEmail(event.target.value)} disabled/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="password" value={password} onChange={event => setPassword(event.target.value)} disabled/>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Estado</Form.Label>
                <Form.Control type="text" placeholder="SP" value={state} onChange={event => setState(event.target.value)} disabled/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Cidade</Form.Label>
                <Form.Control type="text" placeholder="São Paulo" value={city} onChange={event => setCity(event.target.value)} disabled/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDueDate">
                <Form.Label>Rua</Form.Label>
                <Form.Control type="text" placeholder="Rua xxxxxxx nº000" value={street} onChange={event => setStreet(event.target.value)} disabled/>
              </Form.Group>
            </Form.Row>

            <Row>
              <Col>
                <Button variant="primary" size="lg" block onClick={() => deleteUser()}>
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
