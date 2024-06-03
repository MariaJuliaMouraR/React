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
import MovingDot from './Components/semana5/MovingDot';
import ShapeEditor from './Components/semana5/ShapeEditor';
import CounterList from './Components/semana5/CounterList';
import List3 from './Components/semana5/List3';
import List4 from './Components/semana5/List4';

import BucketList from './Components/semana5/BucketList';

export default function Atividade4() {
    return(
        <>
            <h1>Atividade 4</h1>
            <Button /> 
            <br />
            <AlertButton />
            <Toolbar />
            <App />
            <Toolbar2 />
            <Signup />
            <Image />
            <Gallery />
            <UseTime />
            <Form />
            <Counter />
            <MovingDot />
            <ShapeEditor />
            <CounterList />
            <List3 />
            <List4 />
            <BucketList />
            <Link to="/">Retornar a página principal</Link>
        </>
    );
}