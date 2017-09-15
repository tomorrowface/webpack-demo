import { createAction } from 'redux-actions';
var todoList = require('../data/todo');

export const receiveTodo = createAction('REQUEST_TODO');
export const addTodo = createAction('ADD_TODO');

export const getTotoList = () => (dispatch, status) => {
    dispatch(receiveTodo(todoList.data));
};

export const addTodoList = (todo) => (dispatch, status) => {
    dispatch(addTodo(todo));
};