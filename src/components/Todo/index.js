import React from 'react';

import './style.css';

function Todo(props) {
  return (
      <div className="todo" onClick={props.onClick}>{props.descricao}</div>
  )
}

export default Todo;