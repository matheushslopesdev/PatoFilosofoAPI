const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3300

const randomNumber = require("./assets/rand");
const frasesDoPato = require("./assets/frasesDoPato");
const nomeDosPatos = require("./assets/nomeDosPatos");

app.use(cors());

app.get("/api/frases", (req, res) => {
  if (!frasesDoPato.length || !nomeDosPatos.length) {
    return res.status(500).json({ erro: "Dados indisponíveis no momento." });
  }
  
  const randFrases = randomNumber(0, frasesDoPato.length - 1);
  const randPatos = randomNumber(0, nomeDosPatos.length - 1);
  

  const fraseFormatada = {
    frase: frasesDoPato[randFrases],
    autor: nomeDosPatos[randPatos],
  };

  res.json(fraseFormatada);
});

app.listen(PORT, () => {
  console.log("API do Pato Filósofo rodando em http://localhost:3300");
});
