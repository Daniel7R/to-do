import React from "react";
import { createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";

const ToDoContext = createContext(); 

function ToDoProvider(props){

    const {item:toDos,saveItem:saveToDos,loading,error} = useLocalStorage('ToDos_V1',[]);
    const [showModal, setShowModal] = useState(false);
    const [searchValue,setSearchValue] = useState('');

    let searchedToDos = [];
    const completedToDos = toDos.filter(todo => !!todo.completed).length;
    const totalToDos = toDos.length;

    if(searchValue.length === 0){
        searchedToDos = toDos;
    }else{
        searchedToDos = toDos.filter(todo => {

      //Convierto todo a minusculas para evitar cualquier tipo de problema al filtrar los datos
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
      
        return todoText.includes(searchText);
    })
    }

    const completeToDo = (text)=>{
      const toDoIndex = toDos.findIndex(todo => todo.text === text);
    
      const newTodos = [...toDos]

    //Por si de casualidad un usuario le dió en el button de completar ToDo sin querer, lo pueda desmarcar
      if(newTodos[toDoIndex].completed){
        newTodos[toDoIndex].completed = false;
      }else{
        newTodos[toDoIndex].completed = true;
      }
      saveToDos(newTodos);
    };
    
    const addToDo = (text)=>{
      const newTodos =[...toDos];
      newTodos.push({
        text,
        completed:false
      });
      saveToDos(newTodos);
    };

    const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(todo => todo.text === text );
        const newTodos = [...toDos];
        newTodos.splice(toDoIndex,1);
        saveToDos(newTodos)
    };

    return (
        <ToDoContext.Provider value={{totalToDos, completedToDos, searchValue,
        setSearchValue,deleteToDo,completeToDo,searchedToDos,loading,error,showModal,setShowModal,addToDo}}>
            {props.children}
        </ToDoContext.Provider>
    );
}

export {ToDoContext, ToDoProvider};