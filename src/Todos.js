import React, { Component } from "react";
import Todo from "./Todo";

class Todos extends Component  {
  render(){
  let { todos, deleteEntry, completeTodo, handleEdit } = this.props;
  let todoDisplay = todos.map((todo, i) => {
    return (
      <Todo
        key={i}
        value={todo}
        deleteEntry={deleteEntry}
        completeTodo={completeTodo}
        index={i}
        handleEdit={handleEdit}
        handleDoubleClick={this.handleDoubleClick}
      />
    );
  });
  return <div className="todoDisplay">{todoDisplay}</div>;
}
};
export default Todos;
