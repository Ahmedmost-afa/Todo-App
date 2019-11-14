export default class UI {
  displayTodos(todos) {
    todos.forEach(todo => this.createTodoSlice(todo));
  }
  createTodoSlice(info) {
    let todoContent = info;
    let slice = this.createElement("article", "slice");
    let content = this.createElement("p", "content", todoContent);
    let father = document.getElementById("todo-slices");
    let remove = this.createElement(
      "button",
      "remove",
      '<i class="fa fa-trash-alt"></i>'
    );

    slice.appendChild(content);
    slice.appendChild(remove);
    father.appendChild(slice);
  }
  removeElement(target) {
    target.remove(); // here
    alert("slice removed successfully");
  }

  showalert() {
    let err = this.createElement("p", "please add todo");
    document.querySelector("#father").appendChild(err);
  }

  createElement(el, className, content) {
    let element = document.createElement(el);
    element.className = className;

    if (content) {
      element.innerHTML = content;
    }
    return element;
  }
}
