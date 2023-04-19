const express = require("express");
const cors = require("cors");
const calculaIMC = require("./services/calculaIMC");

const app = express();
const port =  5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  let mensagem = {mensagem: "Seja Bem vindo"};

  res.json(mensagem);
})

app.post("/calcula-imc", (req, res) => {
  const { peso, altura } = req.body;

  if (
    calculaIMC.parameterValidation(peso) &&
    calculaIMC.parameterValidation(altura)
  ) {
    const imc = calculaIMC.calculadoraIMC(peso, altura);
    const status = calculaIMC.retornaStatusIMC(imc);
    const responseJson = { imc, status };

    res.json(responseJson);
  } else {
    res.status(400).json({"Erro": "Peso ou altura inválidos!."});
  }
});

app.listen(port, () => {
  console.log(`Servidor node iniciado em: ${new Date()} na porta ${port}`);
});
