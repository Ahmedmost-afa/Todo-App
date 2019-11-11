import Add from './Add.js';
import UI from './UI.js';
import Store from './Store.js';



let store = new Store();
let ui = new UI();

document.getElementById('father').addEventListener('submit', e =>{
    e.preventDefault();

    let todoContent = document.getElementById('click').value;

    if(todoContent === ''){
        ui.showalert();
        return;
    }

    let add = new Add(todoContent)

    ui.createTodoSlice(add);

    store.saveTodos(add);

    this.reset();

})
document.addEventListener('DomContentLoaded', () =>{
    ui.displayTodos(store.getTodos());
})

document.getElementById('todoSlices').addEventListener('click', event =>{
    if( event.target.classList.contains('fa-trash-alt')){

        store.removeTodos(event.target.parentElement.parentElement.getElementById('content').innerText)
        ui.removeElement(target.parentElement.parentElement);
        return;

    }
})

