import React from 'react';
import ReactDOM from 'react-dom';

<article>
    <h1>Meu primeiro componente</h1>
    <ol>
        <li>Componentes: blocos de construção da UI</li>
        <li>Definindo um componente</li>
        <li>Usando um componente</li>
    </ol>
</article>


export function Profile(){
    return (
        <>
        <Avatar />
        <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson"
        width={100}
        height={100}
        />
        <br/> 

        <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart"
        width={100}
        height={100}
        />
        </>
    );
}


export function ProfileTWO(){
    return (
        
        <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />
    );
}

export default function Gallery(){
    return (
        <section>
            <h1>Cientistas incríveis</h1>
            <Profile />
            {/* <Profile />
            <Profile /> */}
        
        </section>
    );
}


export function TodoList(){
    return (
        <>
        <h1>Hedy Lamarr's Todos</h1>
        <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        class="photo"
        />
        <ul>
            <li>Invente novos semáforos</li>
            <li>Ensaie uma cena de filme</li>
            <li>Melhorar a tecnologia do espectro</li>
        </ul>
        </>
    );
}


export function Avatar(){
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    const descricao = "Gregorio Y. Zara";
    const name = "Gregorio Y. Zara";
	return(
    <>
    <img
	className="avatar"
	src="https://i.imgur.com/1bX5QH6.jpg"
	alt= "Lin Lanying"
    width={100}
    height={100}
	/>
    </>
	);
}


const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        {weekday: 'long'}
    ).format(date);
}

const person = {
	name: 'Gregorio Y.Zara',
	theme: {
		backgroundColor: 'black',
		color: 'pink'
	}
};


export function TodoListTWO(){
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    return (
        <>
        <h1>To do List for {formatDate(today)}</h1>
        <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
	    className="avatar"
	    src={avatar}
        />
		<ul>
            <li>Melhorar o videofone</li>
            <li>Preparar palestras sobre aeronáutica</li>
            <li>Trabalho no motor movido a álcool</li>
        </ul>
        </div>
        </>
    );
}