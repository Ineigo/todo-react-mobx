import React from 'react';
import Input from '../Input';
import Button from '../Button';
import PropTypes from 'prop-types';

class TodoControls extends React.Component {
    static propTypes = {
        createTodo: PropTypes.func.isRequired,
        sortTodoList: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            sort: 1
        }
    }
    render() {
        return <div>
            <Input 
                type="text" 
                placeholder="Todo Title" 
                onChange={this._onChange} 
                value={this.state.title} 
            />
            <Button title="add todo" onClick={this._createTodo} />
            {this._makeSortControl()}
        </div>;
    }
    _makeSortControl() {
        return <div>
                <a onClick={this._sort}>
                    {this.state.sort > 0 ? 'asc' : 'desc'}
                </a>
        </div>;
    }

    _sort = () => {
        this.props.sortTodoList(this.state.sort);
        this.setState({ sort: -this.state.sort});
    }
    _onChange = e => {
        this.setState({ title: e.target.value });
    }
    _createTodo = () => {
        this.props.createTodo(this.state.title);
    }
}

export default TodoControls;