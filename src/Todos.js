import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  let { todos, deleteEntry, completeTodo, handleEdit } = props;
  let todoDisplay = todos.map((todo, i) => {
    return (
      <Todo
        key={i}
        value={todo}
        deleteEntry={deleteEntry}
        completeTodo={completeTodo}
        index={i}
        handleEdit={handleEdit}
      />
    );
  });
  return <div className="todoDisplay">{todoDisplay}</div>;
};
export default Todos;
