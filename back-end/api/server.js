// Application Program Interface - API

// comunicação seguindo alguns padrões entre computadores
// conectar com o bd e irá responder as respostas que forem solicitadas para o front-end

//Middleware - resolução de domínios diferentes - Middle (entre a escuta e a requisição, trata a resposta).

import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/", async (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artirts' e '/songs'");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
