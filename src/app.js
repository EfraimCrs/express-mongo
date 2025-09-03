import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/livros.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (error) => {
  console.error("Erro na conexão com o MongoDB:", error);
});

conexao.once("open", () => {
  console.log("Conexão com o MongoDB estabelecida com sucesso!");
});

const app = express();
// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).
  send("Curso de Node.js");
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  const { titulo, autor } = req.body;
  const novoLivro = { id: livros.length + 1, titulo, autor };
  livros.push(novoLivro);
  res.status(201).json("Livros adicionados com sucesso");
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(204).send("Livro deletado com sucesso");
});

export default app;
