import React, { Component } from 'react';
import './App.css';
import Todos from './Todos';
import TodoAdder from './TodoAdder';
import Footer from './Footer';

class App extends Component {
  state = {
    todos:[],
    // dataFilter:[],
    counter:1,
    filter:"All",
    completeAll:true
  };

  chooseData = (type) => {
    // let chosenData;
    // switch (type) {
    //   case "Active":
    //     chosenData = this.state.todos.filter(todo => !todo.completed);
    //     break;
    //   case "Completed":
    //     chosenData = this.state.todos.filter(todo => todo.completed);
    //     break;
    //   case "All":
    //   default:
    //     chosenData = this.state.todos;   
    //     break;
    // }
    // this.setState({dataFilter:chosenData});
    this.setState({filter:type})

    // console.log(chosenData);
  }

  handleSubmit = (newTodo) => {
    if(newTodo.todo === '') return;
    newTodo.id = this.state.counter;
    let updatedTodos = [...this.state.todos, newTodo];
    this.setState({todos:updatedTodos,counter:this.state.counter+1});
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
      todos:deletedArr,
      dataFilter:this.state.todos
    });
    this.chooseData(this.state.filter); //this.chooseData(whateverTabWeAreOn);

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
    this.chooseData(this.state.filter); //this.chooseData(whateverTabWeAreOn);

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
  toggleAll = () => {
    let clone = [...this.state.todos];
    let completeAllTodos = clone.map(el => {
      el.completed = this.state.completeAll;
      return el;
    });
    this.setState({todos:completeAllTodos,completeAll:!this.state.completeAll});
  }


  render() {
    return (
      <div className="App">
        <header className='App-header'>todos</header>
        <TodoAdder handleSubmit={this.handleSubmit} toggleAll={this.toggleAll} todos={this.state.todos}></TodoAdder>
        <Todos todos={this.state.todos} deleteEntry={this.deleteEntry} completeTodo={this.completeTodo}
          handleEdit={this.handleEdit}
          filter={this.state.filter}
          className="todos"
        />
        <Footer todos={this.state.todos} chooseData={this.chooseData} filter={this.state.filter}/>
      </div>
    )
  }
}

export default App;
