export function getImageUrl(person) {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        '.jpg'
    );
}




/*
function Avatar (props) {
    let person = props.person;
    let size = props.size
}

function Profile({ person, size, isSepia, thickBorder }) {
    return (
        <div className="card">
            <Avatar
            person={person}
            size={size}
            isSepia={isSepia}
            thickBorder={thickBorder}
            />
        </div>
    );
}

function Profile(props) {
    return (
        <div className="card">
            <Avatar {...props} />
        </div>
    );
}
*/
