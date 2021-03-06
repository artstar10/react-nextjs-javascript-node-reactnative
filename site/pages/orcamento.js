import Head from 'next/head';
import React from 'react';
import { Button, Container, Form, FormGroup, Input, Jumbotron, Label } from 'reactstrap';

import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

function Orcamento() {
  return (
    <div>
       <Head>
        <title>Orcamento - Arthur</title>
        <meta name="description" content="Solicitar orcamento para ..." />
      </Head>
      <Menu /><hr />
       
       <Jumbotron fluid className="descr-top" >
        <style>
             {`.descr-top{
                  background-color: #050c3d;
                  color: #00a1fc;
                  padding-top: 40px;
                  padding-botton: 40px;
                  margin-botton: 0rem !important;
             }`}
           </style>
           <Container className="text-center">
             <h1 className="display-4">Orçamento</h1>
           </Container>
       </Jumbotron>

       <Jumbotron fluid className="form-orcamento">
         <style>
           {`.form-orcamento{
              padding-top: 80px;
              padding-bottom: 80px;
              background-color: #fff;
              margin-botton: 0rem !important;
           }`}
         </style>
         <Container>
           <Form>
           <FormGroup>
              <Label for="name">Nome</Label>
              <Input type="text" name="name" id="name" placeholder="Preencha com o nome completo" />
           </FormGroup>

           <FormGroup>
              <Label for="email">E-mail</Label>
              <Input type="email" name="email" id="email" placeholder="Preencha com seu melhor e-mail" />
           </FormGroup>

           <FormGroup>
              <Label for="phone">Telefone</Label>
              <Input type="text" name="phone" id="phone" placeholder="(xx) xxxxx-xxxx" />
           </FormGroup>

           <FormGroup>
              <Label for="projeto">Projeto</Label>
              <Input type="textarea" name="projeto" id="projeto" placeholder="Fale um pouco do seu projeto" />
           </FormGroup>

           <Button type="submit" outline color="primary">Solicitar</Button>
           </Form>
         </Container>
       </Jumbotron>

       <Rodape />
    </div>
   );
  }
  
  export default Orcamento;