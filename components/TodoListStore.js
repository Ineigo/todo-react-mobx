import { observable } from 'mobx';

class TodoListStore {
    constructor(Todos = []) {
        this.todos = this.processTodos(Todos);
    }

    @observable todos = [];

    getService = () => ({ createTodo: this.createTodo, removeTodo: this.removeTodo});

    createTodo = title => {
        this.todos.push({ title, id: this.todos.length });
    };

    removeTodo = id => {
        this.todos.replace(this.todos.filter(todo => todo.id !== id));
    };
    
    processTodos = todos => todos.map((todo, i) => { 
        todo.id = i;
        return todo;
    });
}

export default TodoListStore;