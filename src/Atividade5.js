import React from 'react';
import { Link } from 'react-router-dom';
import Atividade from './Components/semana6/Atividade';


export default function Atividade5() {
    return(
        <>
            <h1>Atividade 5</h1>
            <Atividade />
            <br />
            <Link to="/">Retornar a página principal</Link>
        </>
        
    );
}
