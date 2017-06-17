import { observable } from 'mobx';

class TodoListStore {
    constructor(Todos = []) {
        this.todos = Todos;
    }

    @observable todos = [];
}

export default TodoListStore;