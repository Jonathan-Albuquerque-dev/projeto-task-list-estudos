const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const taksContainer = document.querySelector(".taks-list");

let taks = [];

// função para adicionar uma tarrefa
function addTaks() {
  taks.push({
    tarefa: input.value,
    status: false,
  });
  viewTaks();
  input.value = "";
}

// função que renderiza a tarefa
function viewTaks() {
  let newList = "";

  taks.map((item, index) => {
    newList =
      newList +
      `
    <li class="taks ${item.status ? "done" : "taks"}" >
      <img src="img/check.png" alt="button ckecklist" onclick="taskComplet(${index})"/>
      <p>${item.tarefa}</p>
      <img src="img/delet.png" alt="button remove list" onclick="deleteTaks(${index})"/>
    </li>`;
  });

  taksContainer.innerHTML = newList;
}

// função que completa a tarrefa
function taskComplet(index) {
  taks[index].status = !taks[index].status;
  viewTaks();
}

// função que deleta a tarrefa
function deleteTaks(index) {
  taks.splice(index, 1);
  viewTaks();
}

// evento de click no botao
btn.addEventListener("click", addTaks);
