import React from "react";
import {useContext,useState} from 'react';
import {ToDoContext} from '../TodoContext/index';
import './ToDoForm.css';

function ToDoForm(){

    const [newToDoValue,setNewToDoValue] = useState('');

    const {addToDo,setShowModal} = useContext(ToDoContext);

    const onChange = (event)=>{
        
        setNewToDoValue(event.target.value);
    }

    const onCancel = ()=>{
        setShowModal(false);
    };

    const onAdd = (event)=>{
        event.preventDefault();
        addToDo(newToDoValue);
        setShowModal(false);
    };

    return(
        <form onSubmit={onAdd}>
            <label className='formItem' for="toDo">Escribe tu nuevo To Do</label>
            <textarea id="toDo" className='formItem' placeholder="Digite el nuevo To Do" value={newToDoValue} onChange={onChange}></textarea>
            <div className='formItem buttonContainer'>
                <button className="btn delete" type="button" onClick={onCancel}>Cancelar</button>
                <button className="btn add" type="submit">Añadir</button>
            </div>
        </form>
    );
}

export {ToDoForm}