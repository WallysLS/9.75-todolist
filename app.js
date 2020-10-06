const container = document.querySelector(".container");
const input = document.querySelector(".input");
const add_button = document.querySelector(".add-button");
const listOftodos = document.querySelector(".listOfTodos");


add_button.addEventListener("click", addNewTodo);

function addNewTodo() {
  var todoList = document.createElement("ul")
  var todo = document.createElement("li")
  todoList.appendChild(todo)

  if (input.value === "") {
    alert("I'm sorry, your todo can't be empty")
  } else {
    todo.innerHTML = input.value
    document.body.insertBefore(todoList, listOftodos);

    input.value = ""
  }




}
