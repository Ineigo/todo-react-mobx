import React from 'react';
import ReactDOM from 'react-dom';
import TodoListStore from './components/TodoList/TodoListStore';
import TodoList from './components/TodoList';

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
        return(
            <div>
                <h1>ToDoStick</h1>
                <TodoList todos={this.store.todos} />
            </div>
        );
    }

}

ReactDOM.render(<Root />, document.getElementById('root'));
