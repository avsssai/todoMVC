import React, { Component } from "react";

class Todo extends Component {
  state = {
    isEditing: false,
    editValue: this.props.value.todo,
    hover: false,
  };
  handleChange = (event) => {
    this.setState({
      editValue: event.target.value,
    });
  };
  handleEdit = (event) => {
    this.props.handleEdit(this.state.editValue, this.props.id);
    this.setState({ isEditing: false });
  };
  enterEntered = (event) => {
    if (event.key === "Enter") {
      this.handleEdit();
    }
  };

  handleDoubleClick = () => {
    this.setState({ isEditing: true });
    console.log(this.props.id,this.props.index)
  };

  render() {
    let { value, deleteEntry,completeTodo,id } = this.props;
    let { isEditing, editValue } = this.state;
    let strikeOffStyle = value.completed
      ? { color: "gray", textDecoration: "line-through" }
      : { color: "black", textDecoration: "none" };

    let status = value.completed ? (
      <div style={{ color: "green" }}>&#10003;</div>
    ) : (
      ""
    );
    // let displayDeleteButton = this.state.hover
    //   ? "delete-todo"
    //   : "delete-todo-hide";

    let displayTodo;
    if (!isEditing) {
      displayTodo = (
        <div
          className="todo"
        >
          <div className="completeTodo" onClick={() => completeTodo(id)}>
            {status}
          </div>

          <span
            style={strikeOffStyle}
            className="todo-text"
            onDoubleClick={this.handleDoubleClick}
          >
            {value.todo}
          </span>
          <div className="edit-button" onClick={()=>this.handleDoubleClick(id)}> 
            <i className="fa fa-pencil" aria-hidden="true"></i>

          </div>
          <div
            className="delete-todo"
            onClick={() => deleteEntry(id)}
          >
            &#10005;
          </div>
        </div>
      );
    } else {
      displayTodo = (
        <div className="todo">
          <input
            type="text"
            onChange={this.handleChange}
            value={editValue}
            name="edit"
            className="edit-input"
            onKeyDown={this.enterEntered}
            onBlur={this.handleEdit}
            autoFocus
          />
        </div>
      );
    }
    return displayTodo;
  }
}
export default Todo;
