const container = document.querySelector(".container");
const input = document.querySelector(".input");
const add_button = document.querySelector(".add-button");
const listOftodos = document.querySelector(".todo-list");


add_button.addEventListener("click", addNewTodo);
listOftodos = document.addEventListener("click", deleteTodo)

function addNewTodo() {
  const todoList = document.createElement("div")
  const todo = document.createElement("li")
  todoList.appendChild(todo)

  if (input.value.trim() === "") {
    alert("I'm sorry, your todo can't be empty")
  } else {
    todo.innerHTML = input.value
    document.body.insertBefore(todoList, listOftodos);

    input.value = ""

  }

  const checkButton = document.createElement("button")
  checkButton.innerHTML = `<i class="fas fa-check"></i>`
  checkButton.classList.add("complete-btn")
  todoList.appendChild(checkButton)


  const deleteButton = document.createElement("button")
  deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
  deleteButton.classList.add("trash-btn")
  todoList.appendChild(deleteButton)
}

function deleteTodo(event) {
  const item = event.target
  console.log(item)

}
