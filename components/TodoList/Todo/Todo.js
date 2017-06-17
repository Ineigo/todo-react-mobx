import React from 'react';
import PropTypes from 'prop-types';
import { PropTypes as PTMobx, observer} from 'mobx-react';
import Input from '../../Input';
import Button from '../../Button';
import Checkbox from '../../Checkbox';

@observer
class Todo extends React.Component {
    static propTypes = {
        removeTodo: PropTypes.func.isRequired,
        editTodo: PropTypes.func.isRequired,
        toggleComplited: PropTypes.func.isRequired,
        todo: PTMobx.observableObject.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            value: props.todo.title
        }
    }
    render() {
        const isEdit = this.state.isEdit;
        return <li>
            <Checkbox value={this.props.todo.isComplited} onChange={this._toggleComplited} />
            {isEdit ? this._makeEdit() : this._makeTitle() }
            &nbsp;
            <a onClick={this._removeTodo}>remove</a>
        </li>;
    }

    _toggleComplited = () => {
        this.props.toggleComplited(this.props.todo.id);
    }

    _makeEdit() {
        return <div>
            <Input 
                type="text" 
                onChange={this._setValue}
                value={this.state.value} 
            />
            <Button onClick={this._saveValue} title="save"/>
        </div>;
    }
    
    _saveValue = () => {
        this.props.editTodo(this.props.todo.id, this.state.value);
        this._toggleEdit();
    }

    _setValue = e => {
        this.setState({ value: e.target.value });
    }

    _makeTitle() {
        return <a onClick={this._toggleEdit}>{this.props.todo.title}</a>
    }

    _toggleEdit = () => this.setState({ isEdit: !this.state.isEdit });

    _removeTodo = () => this.props.removeTodo(this.props.todo.id);
}
export default Todo;