const readline = require('readline-sync');

const controlador = require('./controlador');

function menu() {
  console.log("\n    Menu de Tarefas    ");
  console.log("1 - Adicionar tarefa");
  console.log("2 - Buscar tarefa");
  console.log("3 - Atualizar tarefa");
  console.log("4 - Remover tarefa");
  console.log("5 - Sair");
}

async function escolherOpcao(opcao) {
  switch (opcao) {
    case '1':
      const nomeAdicionar = readline.question("Digite o nome da tarefa: ");
      await controlador.adicionarTarefa(nomeAdicionar);
      break;

    case '2':
      const nomeBuscar = readline.question("Digite o nome da tarefa: ");
      await controlador.buscarTarefa(nomeBuscar);
      break;

    case '3':
      const nomeAtualizar = readline.question("Digite o nome da tarefa: ");
      const concluidaStr = readline.question("A tarefa foi concluída? (s/n): ");
      const concluida = concluidaStr.toLowerCase() === 's';
      await controlador.atualizarTarefa(nomeAtualizar, concluida);
      break;

    case '4':
      const nomeRemover = readline.question("Digite o nome da tarefa: ");
      await controlador.removerTarefa(nomeRemover);
      break;

    case '5':
      console.log("Saindo do sistema");
      process.exit(0);
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
  }
}

async function main() {
  while (true) {
    menu();
    const opcao = readline.question("Escolha uma opcao: ");
    await escolherOpcao(opcao);
  }
}

main();
