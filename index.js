const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Selecionando a view engine
app.set("view engine", "ejs");

//Configurando o body-parser
app.use(bodyParser.urlencoded({ extends: false }));
app.use(bodyParser.json());

//Criando as rotas
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000, () => {
  console.log("O servidor está rodando em: http://localhost:3000");
});
