// objeto cliente do mongodb
const { MongoClient } = require("mongodb");

// string de conexão
const url = "mongodb+srv://user1234:user12345@cluster0.18tmm9z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(url);

async function conecta() {
    try {
        await client.connect();
        return client.db("agenda");
    } catch (e) {
        console.log("Erro ao conectar no MongoDB!", e.message);
    }
}

module.exports = conecta;