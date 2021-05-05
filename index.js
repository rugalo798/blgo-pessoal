const express = require("express");
const app = express();



app.set('view engine', 'ejs');

//Criando as rotas
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000, () => {
  console.log("O servidor está rodando em: http://localhost:3000");
});
