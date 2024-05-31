import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Components/semana5/Button';
import AlertButton from './Components/semana5/AlertButton';
import Toolbar from './Components/semana5/AlertButton';
import App from './Components/semana5/App';
import Toolbar2 from './Components/semana5/Toolbar2';
import Signup from './Components/semana5/Signup';
import Gallery from './Components/semana5/Gallery';

import Image from './Components/semana5/Image';
import UseTime from './Components/semana5/useTime';
import Form from './Components/semana5/Form';
import Counter from './Components/semana5/Counter';


export default function Atividade4() {
    return(
        <>
            <h1>Atividade 4</h1>
            <Button /> 
            <br />
            <AlertButton />
            <br />
            <Toolbar />
            <br />
            <App />
            <br />
            <Toolbar2 />
            <br />
            <Signup />
            <br />
            <Image />
            <br />
            <Gallery />
            <br />
            <UseTime />
            <br />
            <Form />
            <br />
            <Counter />
            <br />
            <Link to="/">Retornar a página principal</Link>
        </>
    );
}