// 
import React from 'react';
import Gallery from './Components/Gallery';
import { ProfileTWO } from './Components/Gallery';
import { TodoList } from './Components/Gallery';
//import { Avatar } from './Gallery';
import { TodoListTWO } from './Components/Gallery';
import {Link}  from "react-router-dom";


export default function Atividade3() {
    return(
        <>
            <h1>Atividade 3</h1>
            <Gallery />
            <ProfileTWO />
            <TodoList />
            {/* <Avatar /> */}
            <TodoListTWO />
            <br />
            <Link to="/">Retornar a página principal</Link>
        </>
        
    );
}