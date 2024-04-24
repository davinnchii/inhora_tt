import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../types/todo';
import { stat } from 'fs';

interface TodoState {
  todos: Todo[];
  deleted: Todo[];
}


const initialState: TodoState = {
  todos: [],
  deleted: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo: Todo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      }
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      const todoIndex = state.todos.findIndex(({ id }) => id === action.payload);
      if (todoIndex !== -1) {
        state.deleted.push(state.todos[todoIndex])
        state.todos.splice(todoIndex, 1);
      }
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find(({ id }) => id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    undoDelete: (state, action) => {
      const todoIndex = state.deleted.findIndex(({ id }) => id === action.payload);
      if (todoIndex !== -1) {
        state.todos.push(state.deleted[todoIndex]);
        state.deleted.splice(todoIndex, 1);
      }
    }
  }
})

export const { addTodo, undoDelete, deleteTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
