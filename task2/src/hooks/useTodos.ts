import { TODOS_KEY } from "consts";
import { useCallback, useState } from "react";
import { Todo } from "types";

const initTodos = JSON.parse(localStorage.getItem(TODOS_KEY) || "[]");

type HookReturnType = [
  Todo[],
  (todoText: string) => void,
  (todo: Todo) => void,
  (id: number) => void
];

export const useTodos = (): HookReturnType => {
  const [todos, setTodos] = useState<Todo[]>(initTodos);

  const addTodo: HookReturnType[1] = useCallback(
    (text) => {
      const newTodos = [
        ...todos,
        {
          text,
          done: false,
          id: todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 0,
        },
      ];
      localStorage.setItem(TODOS_KEY, JSON.stringify(newTodos));
      setTodos(newTodos);
    },
    [todos]
  );

  const updateTodo: HookReturnType[2] = useCallback(
    (updatedTodo) => {
      const newTodos = todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      );
      localStorage.setItem(TODOS_KEY, JSON.stringify(newTodos));
      setTodos(newTodos);
    },
    [todos]
  );

  const removeTodo: HookReturnType[3] = useCallback(
    (id: number) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      localStorage.setItem(TODOS_KEY, JSON.stringify(newTodos));
      setTodos(newTodos);
    },
    [todos]
  );

  return [todos, addTodo, updateTodo, removeTodo];
};
