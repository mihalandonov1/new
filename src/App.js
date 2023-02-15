
import { useState } from 'react';
import style from'./App.module.css';
import CreateToDo from './Components/CreateToDo';
import ToDoList from './Components/ToDoList';


function App() {

  const [list, setList] = useState([]);

  const getToDo = (parametar) => {
    setList((prevlist) => {
      return [...prevlist, parametar]
    }) 
  }

  const removeToDo = (parametar) => {
    setList(() => {
      return list.filter(element => element.id !== parametar)
    })
  }

  

  return (
    <div className={style.App}>
      <CreateToDo onGetToDo={getToDo}/>
      <ToDoList list={list} onRemoveToDo={removeToDo}/>
    </div>
  );
}

export default App;
