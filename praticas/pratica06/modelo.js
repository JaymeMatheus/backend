const { conectarDb } = require('./database'); 

class Tarefa {
  constructor(nome, concluida, db) {
    this.nome = nome;
    this.concluida = concluida;
    this.id = null;
    this.db = db;
  }

  static async create(nome, concluida) {
    const db = await conectarDb();
    return new Tarefa(nome, concluida, db);
  }

  async inserir() {
    const collection = this.db.collection('tarefas');
    const resultado = await collection.insertOne({
      nome: this.nome,
      concluida: this.concluida
    });
    this.id = resultado.insertedId;
    console.log(`Tarefa "${this.nome}" inserida com sucesso`);
  }

  async alterar() {
    const collection = this.db.collection('tarefas');
    await collection.updateOne(
      { _id: this.id },
      { $set: { nome: this.nome, concluida: this.concluida } }
    );
    console.log(`Tarefa "${this.nome}" atualizada`);
  }

  async deletar() {
    const collection = this.db.collection('tarefas');
    await collection.deleteOne({ nome: this.nome });
    console.log(`Tarefa "${this.nome}" deletada`);
  }

  async buscar() {
    const collection = this.db.collection('tarefas');
    const resultado = await collection.findOne({ nome: this.nome });

    if (resultado) {
      this.id = resultado._id;
      this.concluida = resultado.concluida;
      console.log(`Tarefa encontrada: ${this.nome} (Concluída: ${this.concluida})`);
      return resultado;
    } else {
      console.log(`Tarefa "${this.nome}" não encontrada.`);
      return null;
    }
  }
}

module.exports = Tarefa;
