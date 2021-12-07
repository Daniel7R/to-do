import React from 'react';
import './ToDoItem.css';

function ToDoItem(props){

    return (
        <li className="ToDoItem">
            <span onClick={props.onComplete} className={`Icon Icon-Check ${props.completed && 'Icon-Check--active'}`} ><i className="check" class="fas fa-check-double"></i></span>
            <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p--complete'}`}>{props.text}</p>
            <span onClick={props.onDelete} className="Icon Icon-Delete"><i class="fas fa-trash"></i></span>    
        </li>
    );
}

export {ToDoItem};