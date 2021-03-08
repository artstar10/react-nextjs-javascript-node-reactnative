COMO RODAR O PROJETO BAIXADO
Instalar as dependências  indicadas na package.json em "dependencies": {}
### npm install
Rodar o projeto usando nodemon
### nodemon  app.js

SEQUÊNCIA PARA CRIAR O PROJETO
criar o arquivo package - instala o package.json
### npm init

Gerencia as requisições, rotas, URLs, entre outras funcionalidades
### npm install express 👉 https://www.npmjs.com/package/express

Instalar o módulo para reiniciar o servidor node sempre que houver alteração no código fonte, -g significa globalmente
### npm install -g nodemon 👉 (https://www.npmjs.com/package/nodemon)

Instalar banco de dados mongodb
###  https://www.mongodb.com/try/download/community

configurar variáveis de ambiente do mongoDB
### C:\Program Files\MongoDB\Server\4.4\bin 
### abrir cmd como adm e digitar mongo - para iniciar mongo
### abrir cmd como adm e digitar mongod - para iniciar mongo
### abrir mongodb compass

Instalar o banco de dados MongoDB
### npm install --save mongodb   (https://www.npmjs.com/package/mongodb)
Instalar o mongoose - Mongoose traduz os dados do banco de dados para objetos javaascript para que possam ser utilizados pela aplicação.
### npm install --save mongoose (https://www.npmjs.com/package/mongoose)

Observação: O comando `--save` acrescenta a dependência no arquivo package.json)

Documentação explicando como conectar com o mongoose
https://mongoosejs.com/docs/connections.html
1º criar models na raíz do projeto

permitir acesso a API
### npm install --save cors (https://www.npmjs.com/package/cors)



