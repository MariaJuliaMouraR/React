import React from 'react';
import Gallery from './Components/Gallery';
//import { Profile } from './Components/Gallery';
import { TodoList } from './Components/Gallery';
import { Avatar } from './Components/Gallery';
import { TodoListTWO } from './Components/Gallery';
import {Link}  from "react-router-dom";
import Profile from './Components/Profile';
import PackingList from './Components/PackingList';
import List from './Components/List';
import Recipe from './Components/Recipe';






export default function Atividade3() {
    return(
        <>
            <h1>Atividade 3</h1>
            <Gallery />
            <TodoList />
             <Avatar /> 
            <TodoListTWO />
            <Profile />
            <PackingList />         
            <List />
            <Recipe />
            <br /> 

            <Link to="/">Retornar a página principal</Link>
        </>
        
    );
}