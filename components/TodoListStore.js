import { observable } from 'mobx';
import IDGenerator from './IDGenerator';

class TodoListStore {
    constructor(data = []) {
        const todos = this.restoreTodosLS() || data;
        this.todos = this.processTodos(todos);
    }

    @observable todos = [];

    getService = () => ({ 
        createTodo: this.createTodo, 
        removeTodo: this.removeTodo,
        editTodo: this.editTodo,
        sortTodoList: this.sortTodoList,
        toggleComplitedTodo: this.toggleComplitedTodo
    });

    saveTodoInLS() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    restoreTodosLS() {
        return JSON.parse(localStorage.getItem('todos'));
    }

    sortTodoList = type => {
        this.todos.replace(this.todos.sort((prev, next) => prev.title > next.title  ? -type : prev.title  < next.title  ? type : 0));
        this.saveTodoInLS()
    }

    createTodo = title => {
        let id;
        do {
            id = IDGenerator();
        } while(this.getTodoById(id) !== undefined)

        this.todos.push({ title, id });
        this.saveTodoInLS();
    };

    editTodo = (id, newTitle) => {
        this.getTodoById(id).title = newTitle;
        this.saveTodoInLS();
    }

    toggleComplitedTodo = (id) => {
        const todo = this.getTodoById(id);
        todo.isComplited = !todo.isComplited;
        this.saveTodoInLS();
    }

    getTodoById(id) {
        return this.todos.find(el => el.id === id);
    }

    removeTodo = id => {
        this.todos.replace(this.todos.filter(todo => todo.id !== id));
        this.saveTodoInLS()
    };
    
    processTodos = todos => todos.map((todo, i) => {
        return Object.assign({ id: i, isComplited: false}, todo);
    });
}

export default TodoListStore;