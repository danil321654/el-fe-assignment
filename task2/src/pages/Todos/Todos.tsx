import "./Todos.scss";

import { useTodos } from "hooks";
import { useState } from "react";

export const Todos = () => {
  const [todos, addTodo, updateTodo, removeTodo] = useTodos();
  const [newTodoText, setNewTodoText] = useState("");

  const addNewTodo = () => {
    newTodoText && addTodo(newTodoText);
    setNewTodoText("");
  };

  return (
    <div className="todos">
      <form
        className="todos__add-todo"
        onSubmit={(e) => {
          e.preventDefault();
          addNewTodo();
        }}
      >
        <input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />{" "}
        <button onClick={addNewTodo}>+</button>
      </form>
      <div className="todos__container">
        {todos.map(({ id, text, done }) => (
          <div key={id} className="todo">
            <div
              key={id}
              className={[
                "todo__text",
                ...(done ? ["todo__text--done"] : []),
              ].join(" ")}
              onClick={() => updateTodo({ id, text, done: !done })}
            >
              {text}
            </div>
            <button onClick={() => removeTodo(id)}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
};
