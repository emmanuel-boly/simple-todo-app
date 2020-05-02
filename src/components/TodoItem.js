import React from "react"

class TodoItem extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#d35e0f",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    const { completed, id, title } = this.props.todo

    return (
      <li className="todo-item">
        <input 
          onChange={() => this.props.handleChangeProps(id)} 
          type="checkbox" 
          checked={completed}
          /> 
          <button onClick={() => this.props.deleteTodoPros(id) }>
            Delete
            </button> 
            <span style={completed ? completedStyle : null}> 
              {title}
            </span> 
            </li>
          )
  }
}

export default TodoItem