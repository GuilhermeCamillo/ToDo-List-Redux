import React from "react";
import TodoListTemplate from "./template";
import { Box } from "native-base";
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
      <Box safeAreaTop />
      <TodoListTemplate data={todoList} alterarLista={alterarLista} />
    </>
  );
};

export default TodoList;
