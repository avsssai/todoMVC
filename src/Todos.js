import React, { Component } from "react";
import Todo from "./Todo";

class Todos extends Component  {
  filterData = (type) => {
    let chosenData;
    switch (type) {
      case "Active":
        chosenData = this.props.todos.filter(todo => !todo.completed);
        break;
      case "Completed":
        chosenData = this.props.todos.filter(todo => todo.completed);
        break;
      case "All":
      default:
        chosenData = this.props.todos;   
        break;
    }
    return chosenData;
  }

  render(){
  let {deleteEntry, completeTodo, handleEdit,filter} = this.props;

  
  let todoDisplay = this.filterData(filter).map((todo, i) => {
    return (
      <Todo
        key={todo.id}
        value={todo}
        deleteEntry={deleteEntry}
        completeTodo={completeTodo}
        index={i}
        id={todo.id}
        handleEdit={handleEdit}
        handleDoubleClick={this.handleDoubleClick}
      />
    );
  });
  return <div className="todoDisplay">{todoDisplay}</div>;
}
};
export default Todos;
