import mongoose from "mongoose";
// estrutura dos documentos da sua coleção "livro" no MongoDB
const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: { type: String, required: true },
}, { versionKey: false });

const livro = mongoose.model("livro", livroSchema);

export default livro;
