import { observable } from 'mobx';

class TodoListStore {
    constructor(Todos = []) {
        this.todos = Todos;
    }

    @observable todos = [];

    createTodo = title => {
        console.log(title);
        this.todos.push({ title })
    };
}

export default TodoListStore;