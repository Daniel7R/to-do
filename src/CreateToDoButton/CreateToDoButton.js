import React from 'react';
import './CreateToDoButton.css';
import addButton from '../img/add.png';

function CreateToDoButton({setShowModal,showModal}){

    const clickButton = ()=>{
        showModal? setShowModal(false):setShowModal(true);
    };

    return (
        <button onClick={clickButton} className="createToDoButton">
            <img src={addButton} alt="Add button"/>
        </button>
    );
}

export {CreateToDoButton}