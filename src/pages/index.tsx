import React from "react";
import TodoListTemplate from "./template";
import { Box, StatusBar } from "native-base";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { setTodoList } from "../store/ducks/todoList";

const TodoList = () => {
  const dispatch = useAppDispatch();

  const { todoList } = useAppSelector((state: RootState) => state.todoReducer);

  const alterarLista: (lista: string[]) => void = (lista) => {
    dispatch(setTodoList(lista));
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#404040" />
      <Box safeAreaTop bg="muted.700" />
      <TodoListTemplate data={todoList} alterarLista={alterarLista} />
    </>
  );
};

export default TodoList;
