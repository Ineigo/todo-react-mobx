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
        sortTodoList: this.sortTodoList,
        toggleComplitedTodo: this.toggleComplitedTodo
    });

    sortTodoList = type => {
        this.todos.replace(this.todos.sort((prev, next) => prev.title > next.title  ? -type : prev.title  < next.title  ? type : 0));
    }

    createTodo = title => {
        this.todos.push({ title, id: this.todos.length });
    };

    editTodo = (id, newTitle) => {
        this.getTodoById(id).title = newTitle;
    }

    toggleComplitedTodo = (id) => {
        const todo = this.getTodoById(id);
        todo.isComplited = !todo.isComplited;
    }

    getTodoById(id) {
        return this.todos.find(el => el.id === id);
    }

    removeTodo = id => {
        this.todos.replace(this.todos.filter(todo => todo.id !== id));
    };
    
    processTodos = todos => todos.map((todo, i) => {
        return Object.assign(todo, { id: i, isComplited: false});
    });
}

export default TodoListStore;