import React from 'react';
import PropTypes from 'prop-types';
import { PropTypes as PTMobx, observer} from 'mobx-react';

@observer
class Todo extends React.Component {
    static propTypes = {
        removeTodo: PropTypes.func.isRequired,
        todo: PTMobx.observableObject
    }
    render() {
        return <li>
            {this.props.todo.title} &nbsp;
            <a onClick={this._removeTodo}>remove</a>
        </li>;
    }

    _removeTodo = () => this.props.removeTodo(this.props.todo.id);
}
export default Todo;