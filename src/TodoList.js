import React, { Component } from 'react'
import classnames from 'classnames'

export default class TodoList extends Component {
  state = {
    currentId: '',
    currentTitle: '',
    currentDeadline: '',
    currentStatus: '',
  }
  render() {
    const { todoList } = this.props
    return (
      <div>
        <ul>
          {todoList.map((item) => (
            <li key={item.title} onDoubleClick={() => this.showEdit(item)}>
              <div>
                <div
                  className={classnames({
                    statusColorDone: item.status === 'done',
                    statusColorUnstart: item.status === 'not started',
                    statusColorInprogress: item.status === 'in progress',
                  })}
                ></div>
                <div
                  className={item.id === this.state.currentId ? 'editing' : ''}
                >
                  <h4 className="view">{item.title}</h4>
                  <input
                    className="edit"
                    value={this.state.currentTitle}
                    onChange={(e) =>
                      this.setState({ currentTitle: e.target.value })
                    }
                    onKeyUp={this.handleKeyup}
                  />
                </div>
                <div
                  className={item.id === this.state.currentId ? 'editing' : ''}
                >
                  <i className="view">Deadline: {item.deadline}</i>
                  <input
                    className="edit"
                    value={this.state.currentDeadline}
                    onChange={(e) =>
                      this.setState({ currentDeadline: e.target.value })
                    }
                    onKeyUp={this.handleKeyup}
                  />
                </div>
                <div
                  className={item.id === this.state.currentId ? 'editing' : ''}
                >
                  <select
                    className="edit"
                    value={this.state.currentStatus}
                    onChange={(e) =>
                      this.setState({ currentStatus: e.target.value })
                    }
                    onKeyUp={this.handleKeyup}
                  >
                    <option value="done">Done</option>
                    <option value="not started">Not started</option>
                    <option value="in progress">In progress</option>
                  </select>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="indicatorBox">
          <div className="indicator">
            <div className="statusColorDone">
              <p>Done</p>
            </div>
          </div>
          <div className="indicator">
            <div className="statusColorUnstart">
              <p>Not started</p>
            </div>
          </div>
          <div className="indicator">
            <div className="statusColorInprogress">
              <p>In progress</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  showEdit = ({ id, title, deadline, status }) => {
    this.setState({
      currentId: id,
      currentTitle: title,
      currentDeadline: deadline,
      currentStatus: status,
    })
  }
  handleKeyup = (e) => {
    if (e.keyCode === 27) {
      this.setState({
        currentId: '',
        currentTitle: '',
        currentDeadline: '',
        currentStatus: '',
      })
    }
    if (e.keyCode === 13) {
      this.props.editTodo(
        this.state.currentId,
        this.state.currentTitle,
        this.state.currentDeadline,
        this.state.currentStatus
      )
      this.setState({
        currentId: '',
        currentTitle: '',
        currentDeadline: '',
        currentStatus: '',
      })
    }
  }
}
