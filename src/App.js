import React, { Component } from 'react';
import logo from './logo.svg';
import NewTodoForm from './newTodoForm';
import Todo from './toDo';
import './App.css';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          id: 1,
          content: 'Water plants',
          priority: 'Important',
        },
        {
          id: 2,
          content: 'Cook lunch',
          priority: 'Not Urgent',
        },
        {
          id: 3,
          content: 'Play',
          priority: 'Urgent',
        }
      ]
    }
  }

  addTodo = (data) => {

    let newTodo = {
      id: Date.now(),
      ...data
    }

    let newList = [newTodo, ...this.state.todos]
    this.setState({
      todos: newList
    })
  }

  removeTodo = () => {

  }

  render() {
    return (
      <div className="App">
        <div className="wrap">
          <div className="container">
            <div className="todos">
              {
                this.state.todos.map((todo) => {

                  let props = {
                    key: todo.id,
                    ...todo

                  }

                  return (
                    <Todo {...props} />
                  )
                })
              }

              <NewTodoForm addTodo={this.addTodo}/>

            </div>
          </div>
        </div>
      </div>
    )
  }

};

export default App;
