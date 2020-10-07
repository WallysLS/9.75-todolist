const container = document.querySelector(".container");
const input = document.querySelector(".input");
const add_button = document.querySelector(".add-button");
const listOfTodos = document.querySelector(".todo-list");


add_button.addEventListener("click", addNewTodo);
listOfTodos.addEventListener("click", checkAndDeleteTodo);

function addNewTodo() {
  const todoList = document.createElement("div")
  const todo = document.createElement("li")

  if (input.value.trim() === "") {
    alert("I'm sorry, your todo can't be empty")
  } else {
    todo.innerHTML = input.value

    todoList.appendChild(todo)

    input.value = ""

    const checkButton = document.createElement("button")
    checkButton.innerHTML = `<i class="fas fa-check"></i>`
    checkButton.classList.add("complete-btn")
    todoList.appendChild(checkButton)


    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
    deleteButton.classList.add("trash-btn")
    todoList.appendChild(deleteButton)

    listOfTodos.appendChild(todoList)
  }
}
