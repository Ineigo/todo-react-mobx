import React from 'react';
import PropTypes from 'prop-types';
import { PropTypes as PTMobx, observer } from 'mobx-react';
import Todo from './Todo';

@observer
class TodoList extends React.Component {
    static propTypes = {
        todos: PTMobx.observableArray.isRequired,
        service: PropTypes.object.isRequired
    }

    render() {
        return (<ul>
            {this.props.todos.map(el => this._makeTodo(el))}
        </ul>);
    }

    _makeTodo(el) {
        const service = this.props.service;
        return <Todo 
            key={el.id} 
            todo={el} 
            removeTodo={service.removeTodo}
            editTodo={service.editTodo}
        />;
    }
}

export default TodoList;