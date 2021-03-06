import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import React from 'react';
import { Container, Jumbotron } from 'reactstrap';

import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

library.add(fas);

function Home() {
    return (
       <div>
          <Head>
                <title>Home - Arthur</title>
                <meta name="description" content="Site de ... sobre ..." />
          </Head>
          <Menu />
          <Jumbotron fluid className="descr-top">
           <style>
             {`.descr-top{
                  background-color: #050c3d;
                  color: #00a1fc;
                  margin-botton: 0rem !important;
             }`}
           </style>
           <Container className="text-center">
            <h1 className="display-4">Temos a solução que a sua empresa precisa!</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <p className="lead">
              <a href="/orcamento" className="btn btn-outline-primary btn-lg mt-4">Orçamento</a>
            </p>
          </Container>
      </Jumbotron>
      <Jumbotron fluid className="servicos">
          <style>
            {`.servicos{
              background-color: #fff;
              margin-botton: 0rem !important;
            }.circulo{
                width: 140px;
                height: 140px;
                background-color: #0A197D;
                font-size: 52px;
                color: #fff;
                padding-top: 24px;
            }.centralizar{
              margin: 0 auto !important;
              float: none !important;
            }`}
          </style>
        <Container className="text-center">
          <div>
            <h2 className="display-4">Serviços</h2>
            <p className="lead pb-4">O profissional de Sistemas de Informação administra fluxos de informação em qualquer rede de computadores, seja de empresas ou particulares. Ele desenvolve sistemas de armazenamento e recuperação de dados.</p>
            <div className="row">
              <div className="col-md-4">
                <div className="rounded-circle circulo centralizar">
                   <FontAwesomeIcon icon="database" />
                </div>
                  <h2 className="mt-4 mb-4">Serviço um</h2>
                  <p>Desenvolvimento back-end</p>
              </div>
              <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">
              <FontAwesomeIcon icon="paint-roller" />
                </div>
                  <h2 className="mt-4 mb-4">Serviço dois</h2>
                    <p>Desenvolvimento front-end</p>
                </div>
                <div className="col-md-4">
                   <div className="rounded-circle circulo centralizar">
                   <FontAwesomeIcon icon="code" />
                   </div>
                   <h2 className="mt-4 mb-4">Serviço tres</h2>
                    <p>Desenvolvimento fullstack</p></div>
                 </div>
               </div>
                  
               
        </Container>
      </Jumbotron>
      <Rodape />
       </div>
    );
  }
  
  export default Home;