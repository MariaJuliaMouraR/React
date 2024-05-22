//import { getImageUr } from '/.utils.js';
import "./avatar.css";
import { getImageUrl } from "./Utils";
export default function Avatar({person, size }) {
    return (
        <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        />
        );
}
/*
export function Profile() {
    return(
        <div className='card'>
            <Avatar
            size={100}
            person={{
                name: 'Katsuko Saruhashi',
                imadeId: 'YfeOqp2'
            }}
            />
            <Avatar
            size={80}
            person={{
                name:'Aklilu Lemma',
                imageId: 'OK67lh'
            }}
            />
            <Avatar 
            size={50}
            person={{
                name: 'Lin Lanying',
                imageId: '1bX5QH6'
            }}
            />
        </div>
    );
}
*/

