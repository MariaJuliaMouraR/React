import Contador from './Components/Contador';
import {Link}  from "react-router-dom";


export default function Atividade2() {
    return(
        <>
            <h1>Atividade 2</h1>
            <Contador />
            <br />
            <Link to="/">Retornar a página principal</Link>
        </>
        
    );
}