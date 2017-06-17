import React from 'react';
import Input from '../Input';
import Button from '../Button';
import PropTypes from 'prop-types';
import style from './style.less';

class TodoControls extends React.Component {
    static propTypes = {
        createTodo: PropTypes.func.isRequired,
        sortTodoList: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            sort: 1,
            isError: false
        }
    }
    render() {
        return <div className={style.controls_wrapper}>
            <Input 
                type="text" 
                placeholder="Todo Title" 
                onChange={this._onChange} 
                value={this.state.title}
                isError={this.state.isError}
                className={style.input}
            />
            <Button 
                className={style.button} 
                type="submit" title="+" 
                onClick={this._createTodo}
                disabled={this.state.isError || !this.state.title}
            />
            <a onClick={this._sort} className={style.sort}>
                {this.state.sort > 0 ? 'asc' : 'desc'}
            </a>
        </div>;
    }

    _sort = () => {
        this.props.sortTodoList(this.state.sort);
        this.setState({ sort: -this.state.sort});
    }
    _onChange = e => {
        const val = e.target.value;
        this.setState({ 
            title: val,
            isError: !val
        });
    }
    _createTodo = () => {
        this.props.createTodo(this.state.title);
        this.setState({ title: ''});
    }
}

export default TodoControls;