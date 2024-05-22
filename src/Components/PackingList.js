function Item({ name, isPacked}) {
    let itemContent = name;
    if (isPacked) {
        itemContent = (
            <del>
                {name + "✓"}
            </del>
        );
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
}

export default function PackingList() {
    return (
        <section>
            <h1>Lista de embalagem de Sally Ride</h1>
        <ul>
            <Item
            isPacked={true}
            name="Space suit"
            />
            <Item
            isPacked={true}
            name="Helmet With a golden leaf"
            />
            <Item
            isPacked={false}
            name="Photo of Tam"
            />
        </ul>
        </section>
        
    );
}