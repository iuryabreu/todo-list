import React, { useState } from 'react';
import './style.css';

import Todo from '../Todo';


function TodoList(props) {
 const [todos, setTodos] = useState([

 ])
    
    const [dones, setDones] = useState ([]);
    const [inpTodo, setInpTodo] = useState ('');

    


    const handleSubmit = e => {
      e.preventDefault();
      const newTodos = [...todos, {descricao: inpTodo} ];
      setTodos(newTodos)
      setInpTodo('');
    };

    const handleDone = (objTodo, indexTodo) =>{
      const newDones = todos.filter((_, index) => index !== 
        indexTodo );

        setTodos(newDones);

        const doneTodos = [...dones, objTodo];
        setDones(doneTodos);
    }

  return (
  
    <>
      <div className="todo-list">
        <strong>TODO</strong>
        {todos.map((todo, index) => 
          <Todo 
            key={index} 
            descricao={todo.descricao} 
            onClick={() => handleDone(todo, index)} 
          />
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            value={inpTodo}
            onChange={e => setInpTodo(e.target.value)}
          />
        </form>
      </div>

      <div className="todo-list-done">
        <strong>DONE</strong>
        {dones.map((done, index) => 
          <Todo key={index} descricao={done.descricao} />
        )}
      </div>
    </>
  )
}
export default TodoList;