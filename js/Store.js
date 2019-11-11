export default class Store {
    getTodos() {
        let todos;
        if (localStorage.getItem('todos')) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        return todos; //here
    }
    saveTodos(todo) {
        let todos = this.getTodos();
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos))
    }
    removeTodos(todoContent) {
        let todos = this.getTodos();
        todos.forEach((slice, i) => {
            if (slice.todoContent === todoContent) {
                store.splice(i, 1);
            }
        })
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}