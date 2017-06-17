import React from 'react';
import ReactDOM from 'react-dom';
import TodoListStore from '../TodoListStore';
import TodoList from '../TodoList';
import TodoControls from '../TodoControls';
import style from './style.less';

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.store = new TodoListStore([
            { title: 'Simple Todo 1' },
            { title: 'Simple Todo 2' },
            { title: 'Simple Todo 3' }
        ]);
        console.log(typeof this.store);
    }
    render() {
        const service = this.store.getService();
        return(
            <div className={style.page_wrapper}>
                <h1>ToDoStick</h1>
                <TodoControls 
                    createTodo={service.createTodo}
                    sortTodoList={service.sortTodoList}
                />
                <TodoList 
                    todos={this.store.todos} 
                    service={service} 
                />
            </div>
        );
    }

}

export default Root;