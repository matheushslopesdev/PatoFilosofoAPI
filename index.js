const express = require("express");
const app = express();
const cors = require("cors");

const randomNumber = require("./assets/rand");
const frasesDoPato = require("./assets/frasesDoPato");
const nomeDosPatos = require("./assets/nomeDosPatos");

app.use(cors());

app.get("/api/frases", (req, res) => {
  if (!frasesDoPato.length || !nomeDosPatos.length) {
    return res.status(500).json({ erro: "Dados indisponíveis no momento." });
  }

  const randFrases = randomNumber(0, frasesDoPato.length);
  const randPatos = randomNumber(0, nomeDosPatos.length);

  const fraseFormatada = {
    frase: frasesDoPato[randFrases],
    autor: nomeDosPatos[randPatos],
  };

  res.json(fraseFormatada);
});

app.listen(3300, () => {
  console.log("API do Pato Filósofo rodando em http://localhost:3300");
});
