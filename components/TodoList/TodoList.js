import React from 'react';
// import PropTypes from 'prop-types';
import { PropTypes as PTMobx, observer } from 'mobx-react';
import Todo from './Todo';

class TodoList extends React.Component {
    static propTypes = {
        todos: PTMobx.observableArray.isRequired
    }

    render() {
        return (<ul>
            {this.props.todos.map((el, i) => <Todo key={i} todo={el} />)}
        </ul>);
    }
}

export default TodoList;