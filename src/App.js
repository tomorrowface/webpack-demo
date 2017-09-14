import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, HashRouter } from 'react-router-dom';
import Container from './pages/layout/layout';
import Home from './pages/home/home';
import Todo from './pages/todo/todo';
import './App.less';

ReactDOM.render(
    <HashRouter>
        <Container>
            <Route exact path="/" component={Home} />
            <Route exact path="/todo" component={Todo} />
        </Container>
    </HashRouter>,
    document.getElementById('root')
);