import {ToDoCounter} from '../ToDoCounter/ToDoCounter';
import { ToDoSearch } from '../ToDoSearch/ToDoSearch';
import { ToDoList } from '../ToDoList/ToDoList';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import {CreateToDoButton} from '../CreateToDoButton/CreateToDoButton';
import React from 'react';
import loadingGif from '../img/loading-bar.gif';
import {ToDoContext} from '../TodoContext/index';
import {useContext} from 'react';
import {Modal} from '../modal/Modal';
import {ToDoForm} from '../ToDoForm/ToDoForm'

function AppUI(){

    const {loading,error,searchedToDos,completeToDo,deleteToDo,showModal,setShowModal} = useContext(ToDoContext);

    return(
        <React.Fragment>
            <ToDoCounter />
            <ToDoSearch />
            <ToDoList>
            {
                loading && <img src={loadingGif} alt="loading" className="loading-gif"/>
            }
            {
                error && <p className="first">Sufre perra</p>
            }
            {
                (!loading && !searchedToDos.length) && <p className="empty-toDo">Crea tu primer To Do</p>
            }
            {searchedToDos.map(todo => <ToDoItem key={todo.text} text={todo.text}
            onDelete ={()=> deleteToDo(todo.text)}
            completed={todo.completed} onComplete={()=> completeToDo(todo.text)}></ToDoItem>)}
            </ToDoList>
            {showModal ? (
                <Modal>
                    <ToDoForm/>
                </Modal>
            ):<span></span> }
            <CreateToDoButton setShowModal={setShowModal} showModal={showModal}/>
        </React.Fragment>
    );
}

export {AppUI}