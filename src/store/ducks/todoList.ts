import {
  createAsyncThunk,
  createReducer,
  createAction,
} from "@reduxjs/toolkit";
import { handleApiError } from "../../utils/error";
import { ApiError, DefaultState } from "../../types/store";
import { AxiosResponse } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// INITIAL STATE
type InitialState = DefaultState & {
  todoList?: string[];
};

export const INITIAL_STATE: InitialState = {
  todoList: [],
  status: "idle",
  error: null,
};

// REQUESTS

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
