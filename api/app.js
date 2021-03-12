const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('./models/home');
const Home = mongoose.model('Home');

require('./models/orcamento');
const Orcamento = mongoose.model('Orcamento');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE"); //permite os métodos get, put, post e delete
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization"); // autoriza o usuário a enviar os dados e a aplicação receber
    app.use(cors());
    next();
});

mongoose.connect('mongodb://localhost:27017/arthur', {useNewUrlParser: true, 
useUnifiedTopology: true}).then(() => {
    console.log("Conexão com o MongoDB realizada com sucesso!");
}).catch((err) => {
    console.log("Erro: Conexão com o MongoDB não realizada!");
});

app.get('/home', async (req, res) => {
    await Home.findOne({}).then((home) => {
        return res.json({
            error: false,
            home
        });
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum registro encontrado!"
        });
    });
});

app.post('/home', async (req, res) => {
    const  dados = {
        "topTitulo": "Temos a solução que a sua empresa precisa!",
        "topSubTitulo": "O curso de Sistemas de Informação ofere competências em várias áreas de conhecimento, como por exemplo, as áreas de Engenharia de Software, Governança de TI e Ciência de Dados. Em Engenharia de Software, o aluno aplica todos os conceitos para analise, programação e manutenção de aplicações de software nas plataformas web e mobile, com o devido conhecimento em metodologias ágeis, modelagem e projeto de sistemas, banco de dados e gerenciamento de projetos.",
        "topTextoBtn": "Orçamento",
        "topLinkBtn": "http://localhost:3000/orcamento",
        "serTitulo": "Serviços",
        "serSubtitulo": "O profissional de Sistemas de Informação administra fluxos de informação em qualquer rede de computadores, seja de empresas ou particulares. Ele desenvolve sistemas de armazenamento e recuperação de dados.",
        "serUmIcone": "database",
        "serUmTitulo": "Serviço um",
        "serUmDesc": "Desenvolvimento back-end",
        "serDoisIcone": "paint-roller",
        "serDoisTitulo": "Serviço dois",
        "serDoisDesc": "Desenvolvimento front-end.",
        "serTresIcone": "code",
        "serTresTitulo": "Serviço tres",
        "serTresDesc": "Desenvolvimento full-stack",
    }

    const homeExiste = await Home.findOne({});
    if(homeExiste){
        return res.status(400).json({
            error: true,
            message: "Erro: A página home já possui um registro!"
        });
    }

    await Home.create(dados, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Erro: Conteúdo da página home não cadastrado!"
        });
    });

    return res.json({
        error: false,
        message: "Conteúdo da página home cadastrado com sucesso!"
    })
});

app.post('/orcamento', async (req, res) => {
   
    await Orcamento.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Erro: Solicitação de orçamento enviado com sucesso!"
        });
    });

    return res.json({
        error: false,
        message: "Solicitação de orçamento enviado com sucesso!"
    })
});

app.listen(8080, function(){
    console.log("Servidor iniciado na porta 8080: http:localhost:8080")
});
