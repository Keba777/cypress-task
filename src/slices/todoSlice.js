import { createSlice } from "@reduxjs/toolkit";

const initialTodos = [
  {
    id: 1,
    text: "Complete homework assignment",
    completed: false,
  },
  {
    id: 2,
    text: "Go for a run",
    completed: false,
  },
  {
    id: 3,
    text: "Read a chapter of a book",
    completed: true,
  },
  {
    id: 4,
    text: "Buy groceries",
    completed: false,
  },
  {
    id: 5,
    text: "Write a blog post",
    completed: true,
  },
  {
    id: 6,
    text: "Call a friend",
    completed: false,
  },
  {
    id: 7,
    text: "Organize the living room",
    completed: true,
  },
  {
    id: 8,
    text: "Plan the week's schedule",
    completed: true,
  },
  {
    id: 9,
    text: "Learn a new recipe",
    completed: false,
  },
  {
    id: 10,
    text: "Practice playing the guitar",
    completed: true,
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    updateTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        // Update the text if provided in the payload
        if (action.payload.text !== undefined) {
          todo.text = action.payload.text;
        }
      }
    },

    completeTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo && action.payload.completed) {
        todo.completed = true;
      }
    },

    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, completeTodo, removeTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
