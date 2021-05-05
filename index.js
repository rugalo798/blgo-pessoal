const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

//Selecionando a view engine
app.set("view engine", "ejs");

//Configurando o body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configurando os arquivos estaticos
app.use(express.static("public"));

// Conexão com o banco de dados
connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com sucesso!");
  })
  .catch((err) => {
    console.log(`Ocorreu um erro: ${err}`);
  });

//Criando as rotas
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000, () => {
  console.log("O servidor está rodando em: http://localhost:3000");
});
