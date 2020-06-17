import React, { Component } from "react";
import "./App.css";

class TodoAdder extends Component {
  initialState = {
    todo: "",
    completed: false,
  };
  state = this.initialState;

  handleChange = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };
  handleSubmit = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };
  enteredEnter = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.handleSubmit();
    }
  };
  render() {
    let { todo } = this.state;
    return (
      <form>
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
        />
        <label htmlFor="toggle-all" />

        <input
          type="text"
          className="new-todo"
          autoComplete="off"
          name="todo"
          onChange={this.handleChange}
          value={todo}
          onKeyDown={this.enteredEnter}
          placeholder="What need to be done?"
        />

      </form>
    );
  }
}
export default TodoAdder;
