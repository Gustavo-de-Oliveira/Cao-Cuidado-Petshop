/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import NextLink from 'next/link';
import { Container, Col, Card, Button, Modal, Form } from 'react-bootstrap';

export default function adoption() {
  const [Show, setShow] = React.useState(false);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [complement, setComplement] = React.useState('');
  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');
  const [cep, setCep] = React.useState('');

  const [adoptions, setAdoptions] = React.useState([]);

  const listItems = adoptions.map((adoption) =>  

    <Card
      style={{ width: '15rem' }}
      className="col-lg-3 col-md-12 mr-1 mt-2 mx-auto">
      <Card.Img
        variant="top"
        src={adoption.images}
      />
      <Card.Body>
        <Card.Title>{ adoption.name }</Card.Title>
        <Card.Text>
          Especie: {adoption.specie}<br/>
          Raça: {adoption.race}<br/>
          Nascimento: {adoption.birthDate}<br/>
          Vacinas: {adoption.vaccines}<br/>
        </Card.Text>
        <Button variant="primary" onClick={() => setShow(true)}>
          Mandar email
        </Button>
      </Card.Body>
    </Card>

  );

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('Sending');

    let data = {
      about: "Adoção",
      name,
      email,
      phone,
      address,
      complement,
      state,
      city,
      cep
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
      }
    })
  }


  async function getAdoptions() {
      await fetch('http://localhost:8000/animals').then(async (serverResponse) => {
        const response = await serverResponse.json();
        setAdoptions(response);
      });

  }

  React.useEffect(() => {
      getAdoptions();
  }, [])

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
          
              {listItems}
            
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
                <Form.Control type="text" placeholder="Nome completo" onChange={(e)=>{setName(e.target.value)}}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="email@email.com" onChange={(e)=>{setEmail(e.target.value)}}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Telefone</Form.Label>
                <Form.Control type="cellphone" placeholder="(11) 91111-1111" onChange={(e)=>{setPhone(e.target.value)}}/>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" onChange={(e)=>{setAddress(e.target.value)}}/>
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Complemento</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" onChange={(e)=>{setComplement(e.target.value)}}/>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Estado</Form.Label>
                <Form.Control as="select" defaultValue="Choose..." onChange={(e)=>{setState(e.target.value)}}>
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Cidade</Form.Label>
                <Form.Control onChange={(e)=>{setCity(e.target.value)}}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>CEP</Form.Label>
                <Form.Control onChange={(e)=>{setCep(e.target.value)}}/>
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit" onClick={()=> setShow(false)} onClick={(e)=>{handleSubmit(e)}}>
              Enviar
            </Button>
          </Form>
        </Modal.Header>
      </Modal>
    </Container>
  );
}
