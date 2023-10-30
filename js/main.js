const inputTask = document.getElementById("inputTask");
const taskForm = document.getElementById("taskForm");
const submitBtn = document.querySelector("button[type='submit']");
const tasks = [];

inputTask.addEventListener("input", (event) => {
  submitBtn.disabled = !event.target.value.trim().length > 0;
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskId = Date.now();
  const taskName = inputTask.value.trim();
  const taskCompleted = false;

  if (inputTask.value.trim().length > 0) {
    tasks.find((task) => task.name === taskName)
      ? alert("Tarefa repetida!")
      : handleCreateNewTask();
  }

  function handleCreateNewTask() {
    tasks.push({ id: taskId, name: taskName, complete: taskCompleted });
    createNewTask(taskName, taskId);
    resetForm();
  }
});

function createNewTask(task, id) {
  const showTasks = document.querySelector(".task-list");

  const newTask = `
    <li id="${id}">
      <button type="button"">
        <img src="./assets/circle.svg" alt="ícone de um círculo">
      </button>

      <span>${task}</span>

      <button type="button"">
        <img src="./assets/trash.svg" alt="ícone de uma lixeira">
      </button>
    </li>
  `;

  showTasks.insertAdjacentHTML("beforeend", newTask);

  const taskItem = document.getElementById(id);
  taskItem.children[0].addEventListener("click", () => markTaskAsCompleted(id));
  taskItem.children[2].addEventListener("click", () => deleteTask(id));
}

function markTaskAsCompleted(id) {
  tasks.map((task) => {
    task.id === id ? (task.complete = true) : "";

    const taskCompleted = document.getElementById(`${id}`);

    if (task.complete) {
      taskCompleted.classList.add("task-complete");
      taskCompleted.children[0].children[0].src = "./assets/checkedcircle.svg";
      taskCompleted.children[0].disabled = true;
      counterTasks();
    }
  });
}

function deleteTask(id) {
  const taskToDelete = document.getElementById(id);
  taskToDelete.remove();

  const taskIndiceInArray = tasks.findIndex((task) => task.id === id);
  tasks.splice(taskIndiceInArray, 1);

  noTasks();
  counterTasks();
}

function noTasks() {
  const emptyList = document.querySelector(".empty-tasks");
  emptyList.classList.toggle("blank", tasks.length > 0);
}

function counterTasks() {
  const countCreatedTasks = document.getElementById("countCreatedTasks");
  const countCompletedTasks = document.getElementById("countCompletedTasks");
  const tasksCompleted = tasks.filter((task) => task.complete === true);

  countCreatedTasks.innerHTML = tasks.length;
  countCompletedTasks.innerHTML = tasksCompleted.length;
}

function resetForm() {
  noTasks();
  counterTasks();
  submitBtn.disabled = true;
  inputTask.value = "";
}
