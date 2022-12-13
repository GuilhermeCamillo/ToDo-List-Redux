import {
  createReducer,
  createAction,
} from "@reduxjs/toolkit";
import {  DefaultState } from "../../types/store";

// INITIAL STATE
type InitialState = DefaultState & {
  todoList: string[];
};

export const INITIAL_STATE: InitialState = {
  todoList: [],
  status: "idle",
  error: null,
};

export const setTodoList = createAction<InitialState["todoList"]>(
  "todoList/setTodoList"
);

// REDUCER
export const todoReducer = createReducer<InitialState>(
  INITIAL_STATE,
  (builder) => {
    builder.addCase(setTodoList, (state, action) => {
      state.todoList = action.payload;
    });
  }
);