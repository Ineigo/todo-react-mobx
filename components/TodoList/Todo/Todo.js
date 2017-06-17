import React from 'react';
import PropTypes from 'prop-types';
import { PropTypes as PTMobx, observer} from 'mobx-react';
import Input from '../../Input';
import Button from '../../Button';
import Checkbox from '../../Checkbox';
import style from './style.less';
import classNames from 'classnames';

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
        const wrapperClass = classNames(style.todo_wrapper, {
            [style.isComplited]: this.props.todo.isComplited
        });
        return <li className={wrapperClass}>
            <Checkbox value={this.props.todo.isComplited} onChange={this._toggleComplited} />
            <div className={style.title}>
                {isEdit ? this._makeEdit() : this._makeTitle() }
            </div>
            &nbsp;
            <a onClick={this._removeTodo}>remove</a>
        </li>;
    }

    _toggleComplited = () => {
        this.props.toggleComplited(this.props.todo.id);
    }

    _makeEdit() {
        return <div className={style.edit}>
            <Input 
                type="text" 
                onChange={this._setValue}
                value={this.state.value} 
            />
            <Button 
                onClick={this._saveValue}
                title="save"
                className={style.button}
            />
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