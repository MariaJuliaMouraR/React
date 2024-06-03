import { useState } from 'react';

/*export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);

        /*<button onClick={() => {
            setNumber(0 + 1);
            setNumber(0 + 1);
            setNumber(0 + 1);
          }}>+3</button>

      }}>+3</button>
    </>
  )
}


export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        alert(number);
      }}>+5</button>
    </>
  )
}
setNumber(0 + 5);
alert(0);
*/ 



/*export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(0 + 5);
        setTimeout(() => {
          alert(0);
        }, 3000);
      }}>+5</button>
    </>
  )
}*/


/*export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(0 + 1);
        setNumber(0 + 1);
        setNumber(0 + 1);
      }}>+3</button>
    </>
  )
}*/


/*export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
        <h1>Counter</h1>
        <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
        </>
    )
}*/

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
      <>
      <h1>Counter</h1>
      <h1>{number}</h1>
    <button onClick={() => {
      setNumber(number + 5);
      setNumber(n => n + 1);
      setNumber(42);

    }}>Increase the number</button>
      </>
  )
}






