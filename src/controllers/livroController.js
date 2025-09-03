import e from "express";
import livro from "../models/livros.js";

class LivroController {
    static async listaLivros(req, res) {
        const listaLivros = await livro.find();
        res.status(200).json(listaLivros);
    }
    static async criaLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "Livro criado com sucesso", livro: novoLivro });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao criar livro` });
        }
    }
};

export default LivroController;
