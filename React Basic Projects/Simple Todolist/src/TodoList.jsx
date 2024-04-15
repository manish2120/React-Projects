import React from "react";

const TodoList = (props) => {
  return (
    <>
    <div className="flex items-center gap-2 bg-slate-700 rounded mb-3">
    <button className="bg-transparent" onClick={() => {
      props.onSelect(props.id)
    }}>
      <i className="fa-solid fa-trash"></i>
    </button>
    <li>{props.text}</li>
    </div>
    </>
  )
}

export default TodoList;