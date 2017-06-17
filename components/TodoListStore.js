import { observable } from 'mobx';

class TodoListStore {
    constructor(Todos = []) {
        this.todos = this.processTodos(Todos);
    }

    @observable todos = [];

    getService = () => ({ 
        createTodo: this.createTodo, 
        removeTodo: this.removeTodo,
        editTodo: this.editTodo,
        sortTodoList: this.sortTodoList
    });

    sortTodoList = type => {
        this.todos.replace(this.todos.sort((prev, next) => prev.title > next.title  ? -type : prev.title  < next.title  ? type : 0));
    }

    createTodo = title => {
        this.todos.push({ title, id: this.todos.length });
    };

    editTodo = (id, newTitle) => {
        this.todos.find(el => el.id === id).title = newTitle;
    }

    removeTodo = id => {
        this.todos.replace(this.todos.filter(todo => todo.id !== id));
    };
    
    processTodos = todos => todos.map((todo, i) => { 
        todo.id = i;
        return todo;
    });
}

export default TodoListStore;