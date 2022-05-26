import React, { useState, useEffect, useRef } from 'react';
import {  useStore } from "store/store";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const { count, increment,editItem } = useStore();

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };
const handleUpdate = (e)=>{
  if(input.length > 0){
    editItem({id:props.edit.id,value:input});
  }
}
  const handleSubmit = e => {
    e.preventDefault();
    if(input.length > 0){
     increment({value:input});
     setInput('');
    }
  };

  return (
    <form className='todo-form' onSubmit={(e)=>{e.preventDefault();props.onSubmit()}}>
      {props.edit?.id ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleUpdate} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button   onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
