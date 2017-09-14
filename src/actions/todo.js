import { createAction } from 'redux-actions';
var todoList = require('../data/todo');

export const receiveTodo = createAction('REQUEST_TODO');
export const addTodo = createAction('ADD_TODO');

export const getTotoList = () => (dispatch, state) => {
    dispatch(receiveTodo(todoList.data));
};

export const addTodoList = (todo) => (dispatch, state) => {
    dispatch(addTodo(todo));
};