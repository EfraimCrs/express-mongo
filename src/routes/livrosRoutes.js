import express from "express";
import LivroController from "../controllers/livroController";

const router = express.Router();

router.get("/livros", LivroController.listarLivros);
router.post("/livros", LivroController.criarLivro);

export default router;
