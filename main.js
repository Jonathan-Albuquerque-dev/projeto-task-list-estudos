const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const taksContainer = document.querySelector(".taks-list");

let taks = [];

function addTaks() {
  taks.push({
    tarefa: input.value,
    status: false,
  });
  viewTaks();
  input.value = "";
}

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

function taskComplet(index) {
  taks[index].status = !taks[index].status;
  viewTaks();
}

function deleteTaks(index) {
  taks.splice(index, 1);
  viewTaks();
}

btn.addEventListener("click", addTaks);
