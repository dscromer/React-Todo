import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import styled from 'styled-components'

import './components/Todo.css'


const todos = [
  {
    task: 'Complete Project',
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos
    };
  }
  
  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTask]
    })
  }

  toggleTask = taskID => {
    this.setState({
      todos: this.state.todos.map(task => {
        if (taskID === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      }),
    });
  };

  clearCompleted = e => {
    e.preventDefault();

    this.setState({
      todos: this.state.todos.filter(task => !task.completed)
    });
  };

  AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: 
  `

  render() {
    return (
      <this.AppContainer>
        <div className='header'>
          <h1>Todo List</h1>
          <TodoForm addTask={this.addTask}/>
        </div>
        <TodoList 
          todos={this.state.todos}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </this.AppContainer>
    );
  }
}

export default App;
