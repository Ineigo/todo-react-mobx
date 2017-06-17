import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h1>ToDoStick</h1>
            </div>
        );
    }

}

ReactDOM.render(<Root />, document.getElementById('root'));
