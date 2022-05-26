import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import {  useStore } from "store/store";

const Todo = () => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  const { list,editItem,removeItem } = useStore();

  const submitUpdate = value => {
     setEdit({
       id:null,
       value:""
     })
  };
  const removeTodo = (valId)=>{
     removeItem({id:valId})
  }
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={()=>submitUpdate()} />;
  }

  return list.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;
