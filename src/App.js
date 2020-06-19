import React, { Component } from 'react';
import './App.css';
import Todos from './Todos';
import TodoAdder from './TodoAdder';
import Footer from './Footer';

class App extends Component {
  state = {
    todos:[
      {todo:"one",completed:false,id:1},
      {todo:"two",completed:false,id:2},
      {todo:"three",completed:false,id:3},
      {todo:"four",completed:false,id:4},
    ],
    dataFilter:[]
  };

  chooseData = (type) => {
    let chosenData;
    switch (type) {
      case "Active":
        chosenData = this.state.todos.filter(todo => !todo.completed);
        break;
      case "Completed":
        chosenData = this.state.todos.filter(todo => todo.completed);
        break;
      case "All":
      default:
        chosenData = this.state.todos;   
        break;
    }
    console.log(chosenData);
    this.setState({dataFilter:chosenData});
  }

  handleSubmit = (newTodo) => {
    if(newTodo.todo === '') return;
    let updatedTodos = [...this.state.todos, newTodo];
    this.setState({todos:updatedTodos});
  }

  deleteEntry = (id) => {
    // let filteredTodos = this.state.todos.filter((_,i)=>{
    //   return index !== i;
    // })
    let clone = [...this.state.todos];

    // let deletedTodo = clone.find((el) => {
    //   return el.id === id;
    // });
    let deletedArr = clone.filter(todo => todo.id !== id);
    this.setState({
      todos:deletedArr
    })
  }

  completeTodo = (id) => {
    let newTodos = [...this.state.todos];
    let completedTodo = newTodos.find((el) => {
      return el.id === id;
    });
    
    // completedTodo[0].completed = !this.state.todos[index].completed;
    // newTodos[index].completed = completedTodo[0].completed;
    
    // this.setState({todos:newTodos});
    completedTodo.completed = !completedTodo.completed;
    this.setState({todos:newTodos})
    console.log(completedTodo);
    console.log(newTodos);
}

  handleEdit = (editedValue,id) =>{
    let clone = [...this.state.todos];
    let editedTodo = clone.find((el) => {
      return el.id === id;
    });
    if(editedValue === '') {
      editedValue = editedTodo.todo;
    }
    editedTodo.todo = editedValue;
    // clone[index].todo = editedValue;
    // this.setState({todos:clone});
    console.log(editedTodo,editedValue);
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
        <Footer todos={this.state.todos} chooseData={this.chooseData}/>
      </div>
    )
  }
}

export default App;
