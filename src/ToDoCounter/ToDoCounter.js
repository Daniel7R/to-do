import React from 'react';
import './ToDoCounter.css';
import ToDoIcon from '../img/title.png';
import { ToDoContext } from '../TodoContext';
import {useContext} from 'react';

function ToDoCounter(){
    
    const {totalToDos,completedToDos} = useContext(ToDoContext);

    return(
        <React.Fragment>
            <div className="imgContainer">
                <img src={ToDoIcon} alt="To Do icon"/>
            </div>
            <h3 className="ToDoCounterTitle">Has completado {completedToDos} de {totalToDos} tareas</h3>
        </React.Fragment>
        
    );
}

export {ToDoCounter};