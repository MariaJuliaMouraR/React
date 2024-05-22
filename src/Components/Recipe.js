function Recipe({ drinkers }) {
    return (
        <>
        <h1>Recipe</h1>
        <ol>
            <li>Boil {drinkers} cup of water. </li>
            <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons </li>
            <li>Add {0.5 * drinkers} cups of milk to boil and sugar to tea </li>
        </ol>
        </>
    );
}

export default function App() {
    return (
        <section>
            <h1>Spiced Chai Recipe</h1>
            <h2>For two</h2>
            <Recipe drinkers={2} />
            <h2>For a gathering</h2>
            <Recipe drinkers={4} />
        </section>
    );
}

function Cup({ guest }) {
    return <h2>Tea cup for guest #{guest}</h2>;
}

export function TeaSet() {
    return (
        <>
            <Cup guest={1} />
            <Cup guest={2} />
            <Cup guest={3} />
        </>
    );
}