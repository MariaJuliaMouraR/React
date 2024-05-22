import { people } from './Data.js';
import { getImageUrl } from './Utils.js';


export default function List() {
  const listItems = people.map(person =>
    <li key={person.id} style={{display: 'flex', width: "600px"}}>
      <img style={{borderRadius: '100px' , width: '100px', height: '95px'}}
        src={getImageUrl(person)}
        alt={person.name}
      />

      <p style={{margin: "20px , auto"}}>
        
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
   
  );
  return <ul>{listItems}</ul>;
}