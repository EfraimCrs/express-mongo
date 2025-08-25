//import http from "http";

import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/": "Rota raiz express API",
    "/livros": "Rota de livros",
    "/autores": "Rota de autores",
};

// Usandao a biblioteca do HTTP

//const server = http.createServer((req, res) => {
//  res.statusCode = 200;
//  res.setHeader("Content-Type", "text/plain");
//  res.end(rotas[req.url] || "Rota inexistente");
//});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});