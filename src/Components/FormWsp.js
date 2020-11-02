import react, { useState } from "react";

import { 
  Button, 
  Container, 
  Header, 
  Form,
  Message, 
} from 'semantic-ui-react'

function FormWsp(){
  
  const [number, updateNumber] = useState(0);
  const [message, updateMessage] = useState("");

  function send(e){
    e.preventDefault();
    window.location.replace(`https://wa.me/${number}?text=${encodeURIComponent(message)}`)
  }

  return(
    <div className="form-wsp">
      <Container>
      
      <Message color="green">
        <h2>Bienvenido a Fast whatsapp</h2>
        <p>Aquí podrás mandar un mensaje de whatsapp a una persona sin tener que agregar a tu lista de contactos </p>
      </Message>

      <Header as="h2" inverted color="grey">Fast whatsapp</Header>

      <Form onSubmit={send}>

        <Form.Field control="input" type="number" 
          placeholder="Código de país + Número" 
          onChange={(e) => updateNumber(e.target.value)}
        />
        <Form.Field control="textarea" row="3" placeholder="Mensaje" 
          onChange={(e) => updateMessage(e.target.value)}
        />
      
        <Button type='submit' color="green">Enviar</Button>
      
      </Form>

      </Container>
    </div>
  )
} 

export default FormWsp;