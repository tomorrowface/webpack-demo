import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {

    render() {
        return (
            <h1>hello react</h1>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);