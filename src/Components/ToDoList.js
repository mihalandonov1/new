import React from 'react'
import './ToDoList.css'


const ToDoList = (props) => {

  return (
    <div>
        {props.list.length > 0 && 
            <div>
            {props.list.map((element) => (
                <div key={element.id} className="container">
                <div className="wrapper">
                    <p>{element.value}</p>
                    <button onClick={() => props.onRemoveToDo(element.id)}>
                    remove
                    </button>
                </div>
                </div>
            ))}
            </div>}

        {props.list.length === 0 &&
            <div>
                <h1>the list is empty</h1>
            </div>}
    </div>
  );
}

export default ToDoList