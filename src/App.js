import React from 'react';
import ReactDOM from 'react-dom';
import './App.less';
import Container from './pages/Layout/Layout';

class App extends React.Component {

    render() {
        return (
            <Container />
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);