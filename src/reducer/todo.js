import { handleActions } from 'redux-actions';

export const todos = handleActions({
    REQUEST_TODO: (state, action) => ({
      data: action.payload
    }),
    ADD_TODO: (state, action) => ({
      data: state.data.concat(action.payload)
    })
  }, { data: [] });