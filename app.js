const filter = document.querySelector(".filter-todo");
const input = document.querySelector(".input");
const add_button = document.querySelector(".add-button");
const listOfTodos = document.querySelector(".todo-list");

add_button.addEventListener("click", addNewTodo);
listOfTodos.addEventListener("click", checkAndDeleteTodo);
filter.addEventListener("click", filterTodo);

function addNewTodo() {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todoDiv");
  const todo = document.createElement("li");
  todo.classList.add("todo-item");

  if (input.value.trim() === "") {
    alert("I'm sorry, your todo can't be empty");
  } else {
    todo.innerHTML = input.value;

    todoDiv.appendChild(todo);
    saveLocalTodos(input.value);

    input.value = "";

    const checkButton = document.createElement("button");
    checkButton.innerHTML = `<i class="fas fa-check"></i>`;
    checkButton.classList.add("complete-btn");
    todoDiv.appendChild(checkButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
    deleteButton.classList.add("trash-btn");
    todoDiv.appendChild(deleteButton);

    listOfTodos.appendChild(todoDiv);
  }
}

function checkAndDeleteTodo(event) {
  const item = event.target;
  const todo = item.parentElement;
  if (item.classList == "complete-btn") {
    todo.classList.toggle("completed");
  }

  if (item.classList == "trash-btn") {
    todo.classList.add("fall");
    todo.addEventListener("transitionend", (event) => {
      todo.remove();
    });
  }
}
function filterTodo(event) {
  const todos = listOfTodos.childNodes;
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
