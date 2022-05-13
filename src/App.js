import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: false,
      showList: false,
      todoList: [
        {
          id: 1,
          title: 'Pay the Internet bill',
          deadline: 'Tomorrow morning',
          status: 'not started',
        },
        {
          id: 2,
          title: 'Finalize the React assignment',
          deadline: 'This Friday',
          status: 'in progress',
        },
      ],
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <button className="add addnew" onClick={this.handleNew}>
            Add a new todo
          </button>
          <div>
            {this.state.newTodo && (
              <TodoForm
                newlist={this.state.newlist}
                addTodo={this.addTodo}
              ></TodoForm>
            )}
          </div>
          <div>
            {this.state.showList && (
              <TodoList
                todoList={this.state.todoList}
                editTodo={this.editTodo}
              ></TodoList>
            )}
          </div>
        </div>
      </React.Fragment>
    )
  }
  handleNew = () => {
    this.setState({
      newTodo: true,
      showList: false,
    })
  }
  addTodo = (newTodo) => {
    if (newTodo.title.trim() === '' || newTodo.deadline.trim() === '') {
      alert('Can not be empty')
      return
    }
    this.setState({
      todoList: [
        {
          id: Date.now(),
          title: newTodo.title,
          deadline: newTodo.deadline,
          status: newTodo.status,
        },
        ...this.state.todoList,
      ],
      newTodo: false,
      showList: true,
    })
  }
  editTodo = (id, title, deadline, status) => {
    this.setState({
      todoList: this.state.todoList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title,
            deadline,
            status,
          }
        } else {
          return item
        }
      }),
    })
  }
}

export default App
