import express from "express";

const app = express();
// middleware
app.use(express.json());

const livros = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien" },
    { id: 2, titulo: "1984", autor: "George Orwell" },
    { id: 3, titulo: "O Hobbit", autor: "J.R.R. Tolkien" },
];

function buscaLivro(id) {
    return livros.findIndex(livro => {
      return livro.id === Number(id);
    })
}

app.get("/", (req, res) => {
  res.status(200).
  send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
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