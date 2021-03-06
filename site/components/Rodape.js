import React from 'react';
import { Container, Jumbotron } from 'reactstrap';

const Rodape = () =>{ 
    return (
        <Jumbotron fluid className="rodape">
            <style>
                {`.rodape{
                    background-color: #050D3D;
                    color: #fff;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    margin-botton: 0rem !important;
                }`}
            </style>
            <Container className="text-center">
                <h1 className="lead">Feito por Arthur Neves</h1>
            </Container>
        </Jumbotron>
    );
};
export default Rodape;