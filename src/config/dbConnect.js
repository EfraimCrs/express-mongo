import mongoose from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.8d53qca.mongodb.net/livraria3?retryWrites=true&w=majority&appName=Cluster0");
    return mongoose.connection;
};

export default conectaNaDatabase;