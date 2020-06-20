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
  toggleAll = () => {
    this.props.toggleAll();
  }
  render () {
    let { todo } = this.state;
    let todosLength = this.props.todos.length;
    let toggleAllClass
    if(todosLength > 0) {
      toggleAllClass = 'toggle-all-button';
    }else{
       toggleAllClass = 'toggle-all-hide' 
    }
    return (
      <form className='input'>
        <label className={toggleAllClass} onClick={this.toggleAll} style={{background:"white"}}>&#10003;</label>

        <input
          type="text"
          className="new-todo"
          autoComplete="off"
          name="todo"
          onChange={this.handleChange}
          value={todo}
          onKeyDown={this.enteredEnter}
          style={{background:"white"}}
          placeholder="What needs to be done?"
        />

      </form>
    );
  }
}
export default TodoAdder;
