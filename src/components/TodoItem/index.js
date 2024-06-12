// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoItem, ondeleteTodo} = props
  const {title, id} = todoItem
  const DeleteTodo = () => {
    ondeleteTodo(id)
  }
  return (
    <li className="list-element">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={DeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
