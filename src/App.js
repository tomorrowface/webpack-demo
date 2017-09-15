import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import { Route, IndexRoute, HashRouter } from 'react-router-dom';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import Container from './components/container/container';
import Home from './pages/home/home';
import {Todo} from './pages/todo/todo';
import {rootReducer} from './reducer/index';
import './App.less';

const middleware = [ thunk ];
middleware.push(createLogger());
const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Container>
                <Route exact path="/" component={Home} />
                <Route exact path="/todo" component={Todo} />
            </Container>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);