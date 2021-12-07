import React from 'react';
import './ToDoSearch.css';
import {useContext} from 'react';
import {ToDoContext} from '../TodoContext/index'

function ToDoSearch(){

    const {searchValue,setSearchValue} = useContext(ToDoContext);

    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return (
        <React.Fragment>
            <input onChange={onSearchValueChange } value={searchValue} className="searcher" type="search" placeholder="Buscar"/>
        </React.Fragment>   
    );
}

export {ToDoSearch};