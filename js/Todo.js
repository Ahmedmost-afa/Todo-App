import Add from "./Add.js";
import UI from "./UI.js";
import Store from "./Store.js";

let store = new Store();
let ui = new UI();

document.getElementById("father").addEventListener("submit", function(e) {
  e.preventDefault();

  let todoContent = document.getElementById("click").value;

  if (todoContent === "") {
    ui.showalert();
    return;
  }

  // let add = new Add(todoContent)

  ui.createTodoSlice(todoContent);

  store.saveTodos(todoContent);

  this.reset();
});
document.addEventListener("DOMContentLoaded", () => {
  ui.displayTodos(store.getTodos());
});

document.getElementById("todo-slices").addEventListener("click", event => {
  if (event.target.classList.contains("fa-trash-alt")) {
    store.removeTodos(
      event.target.parentElement.parentElement.querySelector(".content")
        .innerText
    );
    ui.removeElement(event.target.parentElement.parentElement);
    return;
  }
});
