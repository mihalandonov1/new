import React, { useState } from 'react'

const CreateToDo = (props) => {

    const [ToDo, setToDo] = useState('');


    const addToListHandler = (event) => {
        setToDo(event.target.value) 
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const ToDoValue = {
            value: ToDo, 
            id: Math.random().toString()
        };
        props.onGetToDo(ToDoValue);
        setToDo('');
    }

  return (
    <form onSubmit={submitHandler}>
        <label name="List">List</label>
        <input type='text' onChange={addToListHandler} value={ToDo}></input>
        <button>Add</button>
    </form>
  )
}

export default CreateToDo