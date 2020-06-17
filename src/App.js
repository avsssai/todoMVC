import React, { Component } from 'react';
import './App.css';
import Todos from './Todos';
import TodoAdder from './TodoAdder';

class App extends Component {
  state = {
    todos:[
      {todo:"Go to the market",completed:false},
      {todo:"Get Eggs",completed:false},
      {todo:"Finish writing paper.",completed:false},
      {todo:"Buy pins.",completed:false}
    ]
  };

  handleSubmit = (newTodo) => {
    if(newTodo.todo === '') return;
    let updatedTodos = [...this.state.todos, newTodo];
    this.setState({todos:updatedTodos});
  }

  deleteEntry = (index) => {
    let filteredTodos = this.state.todos.filter((_,i)=>{
      return index !== i;
    })
    this.setState({
      todos:filteredTodos
    })
  }

  completeTodo = (index) => {
    let completedTodo = this.state.todos.filter((_,i) => {
        return index === i;
    });
    completedTodo.todo = this.state.todos[index].todo;
    completedTodo.completed = !this.state.todos[index].completed;
    let newTodos = [...this.state.todos];
    newTodos[index] = completedTodo;
    this.setState({todos:newTodos});
}

  handleEdit = (editedValue,index) =>{
    let clone = [...this.state.todos];
    clone[index].todo = editedValue;
    this.setState({todos:clone});
  }


  render() {
    return (
      <div className="App">
        <header className='App-header'>todos</header>
        <TodoAdder handleSubmit={this.handleSubmit}></TodoAdder>
        <Todos todos={this.state.todos} deleteEntry={this.deleteEntry} completeTodo={this.completeTodo}
          handleEdit={this.handleEdit}
        />
      </div>
    )
  }
}

export default App;
