import React from 'react';
import PropTypes from 'prop-types';
import { PropTypes as PTMobx, observer } from 'mobx-react';
import Todo from './Todo';
import style from './style.less';

@observer
class TodoList extends React.Component {
    static propTypes = {
        todos: PTMobx.observableArray.isRequired,
        service: PropTypes.object.isRequired
    }

    render() {
        return (<ul className={style.list_wrapper}>
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
            toggleComplited={service.toggleComplitedTodo}
        />;
    }
}

export default TodoList;