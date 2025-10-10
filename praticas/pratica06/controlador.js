const Tarefa = require('./modelo');

async function adicionarTarefa(nome) {
  const tarefa = await Tarefa.create(nome, false);
  await tarefa.inserir();
  console.log(`Tarefa "${nome}" adicionada com sucesso`);
}

async function buscarTarefa(nome) {
  const tarefa = await Tarefa.create(nome, false);
  const resultado = await tarefa.buscar();
  if (resultado) {
    console.log("Dados da tarefa encontrada:");
    console.log(`ID: ${resultado._id}`);
    console.log(`Nome: ${resultado.nome}`);
    console.log(`Concluída: ${resultado.concluida}`);
  }
  return resultado;
}

async function atualizarTarefa(nome, concluida) {
  const tarefa = await Tarefa.create(nome, concluida);
  const existente = await tarefa.buscar();

  if (existente) {
    tarefa.id = existente._id;
    tarefa.concluida = concluida;
    await tarefa.alterar();
    console.log(`Tarefa "${nome}" atualizada com sucesso`);
  } else {
    console.log(`Tarefa "${nome}" não encontrada para atualização.`);
  }
}

async function removerTarefa(nome) {
  const tarefa = await Tarefa.create(nome, false);
  const existente = await tarefa.buscar();

  if (existente) {
    await tarefa.deletar();
    console.log(`Tarefa "${nome}" removida com sucesso`);
  } else {
    console.log(`Tarefa "${nome}" não encontrada para remoção.`);
  }
}

module.exports = {
  adicionarTarefa,
  buscarTarefa,
  atualizarTarefa,
  removerTarefa
};
