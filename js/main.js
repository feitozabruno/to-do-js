const taskForm = document.getElementById("taskForm");
const inputForm = document.getElementById("inputForm");

const tasks = [];

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  tasks.push({
    id: Date.now().toString(),
    name: inputForm.value,
    complete: false,
  });
});

const showTasks = document.querySelector(".task-list");

const newTask = document.createElement("li");
const checkIcon = document.createElement("img");
const checkBtn = document.createElement("button");
const taskName = document.createElement("span");

taskName.innerHTML = "Trabalhar";

checkIcon.setAttribute("src", "./assets/circle.svg");
checkIcon.setAttribute("alt", "ícone de um círculo");

checkBtn.setAttribute("type", "button");
checkBtn.appendChild(checkIcon);

const deleteIcon = document.createElement("img");
const deleteBtn = document.createElement("button");

deleteIcon.setAttribute("src", "./assets/trash.svg");
deleteIcon.setAttribute("alt", "ícone de uma lixeira");

deleteBtn.setAttribute("type", "button");
deleteBtn.appendChild(deleteIcon);

newTask.appendChild(checkBtn);
newTask.appendChild(taskName);
newTask.appendChild(deleteBtn);

showTasks.appendChild(newTask);

/*
<li>
  <button type="button">
    <img src="./assets/circle.svg" alt="ícone de um círculo" />
  </button>

  <span>Estudar</span>

  <button type="button">
    <img src="./assets/trash.svg" alt="ícone de uma lixeira" />
  </button>
</li>
*/

// tasks.map((task) => console.log(task.name));
// - [x] Armazenar o valor digitado no formuário em um array de objetos.
// - [x] Percorrer os objetos do array e exibir na tela.
// - [ ] Exibir na tela as tarefas armazenadas no array.
