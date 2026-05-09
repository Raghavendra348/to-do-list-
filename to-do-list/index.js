const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
      <span>${task.text}</span>

      <div class="task-buttons">
        <button class="complete-btn" onclick="toggleTask(${index})">
          ${task.completed ? "Undo" : "Done"}
        </button>

        <button class="delete-btn" onclick="deleteTask(${index})">
          Delete
        </button>
      </div>
    `;

    taskList.appendChild(li);
  });
}

function addTask() {
  const text = taskInput.value.trim();

  if (text === "") {
    alert("Please enter a task");
    return;
  }

  tasks.push({
    text: text,
    completed: false
  });

  saveTasks();
  displayTasks();

  taskInput.value = "";
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;

  saveTasks();
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);

  saveTasks();
  displayTasks();
}

addBtn.addEventListener("click", addTask);

displayTasks();