import React from 'react';
import Input from '../Input';
import Button from '../Button';
import PropTypes from 'prop-types';

class TodoControls extends React.Component {
    static propTypes = {
        createTodo: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            title: ''
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
        </div>;
    }
    _onChange = e => {
        this.setState({ title: e.target.value });
    }
    _createTodo = () => {
        this.props.createTodo(this.state.title);
    }
}

export default TodoControls;