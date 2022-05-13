import React, { Component } from 'react'

export default class TodoForm extends Component {
  state = {
    newTodo: { title: '', deadline: '', status: '' },
  }

  render() {
    return (
      <div className="todoForm">
        <div className="title">Add new todo</div>
        <form action="">
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={this.state.newTodo.title}
            onChange={this.handleChange}
          />
          <br />
          <input
            name="deadline"
            type="text"
            placeholder="Deadline"
            value={this.state.newTodo.deadline}
            onChange={this.handleChange}
          />
          <br />
          <select
            name="status"
            id=""
            value={this.state.newTodo.status}
            onChange={this.handleChange}
          >
            <option disabled={true} value="">
              Status
            </option>
            <option value="done">Done</option>
            <option value="not started">Not started</option>
            <option value="in progress">In progress</option>
          </select>
        </form>
        <div className="btns">
          <button className="btn cancel" onClick={this.handleCancel}>
            Cancel
          </button>
          <button className="btn add" onClick={this.handleAdd}>
            Add
          </button>
        </div>
      </div>
    )
  }
  handleCancel = () => {
    this.setState({
      newTodo: { title: '', deadline: '', status: '' },
    })
  }
  handleChange = (e) => {
    const { name } = e.target
    this.setState((prevState) => {
      const prevTodo = prevState.newTodo
      prevTodo[name] = e.target.value
      return { newTodo: prevTodo }
    })
  }
  handleAdd = () => {
    this.props.addTodo(this.state.newTodo)
  }
}
