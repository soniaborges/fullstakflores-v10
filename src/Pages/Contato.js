import { Button, Card, Container, Form } from 'react-bootstrap';

export default function Contato(props) {
  return (

    <Container >
      <Form >
        <Form.Group >
          <Form.Label><h3>Nome:</h3></Form.Label>
          <Form.Control type="nome" placeholder="Coloque seu nome: - PAGINA DESTIVADA EM CONSTRUÇÃO" />
        </Form.Group>
<Form.Group >
          <Form.Label><h3>Coloque sua mensagem:</h3></Form.Label>
          <Form.Control as="textarea" rows={7} placeholder="Aguardamos por sua msg..... - PAGINA DESTIVADA EM CONSTRUÇÃO" />
        </Form.Group>
        <Button variant="outline-success" type="submit" block>
          Enviar
        </Button>
      </Form>
    </Container>


  )
}