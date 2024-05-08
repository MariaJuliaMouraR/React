import React, { useState } from 'react';
import homem2 from './homem2.jpg'; // Importando a imagem do homem
import mulher2 from './mulher2.jpg'; // Importando a imagem da mulher

const Counter = () => {
  const [homeTotal, setHomeTotal] = useState(0);
  const [mulherTotal, setMulherTotal] = useState(0);

  const increaseCounter = (gender) => {
    if (gender === 'homem') {
      setHomeTotal(homeTotal + 1);
    } else if (gender === 'mulher') {
      setMulherTotal(mulherTotal + 1);
    }
  };

  const decreaseCounter = (gender) => {
    if (gender === 'homem' && homeTotal > 0) {
      setHomeTotal(homeTotal - 1);
    } else if (gender === 'mulher' && mulherTotal > 0) {
      setMulherTotal(mulherTotal - 1);
    } else {
      alert(`Não é possível diminuir mais ${gender}, a contagem já está em zero.`);
    }
  };

  const resetCounters = () => {
    setHomeTotal(0);
    setMulherTotal(0);
  };

  const total = homeTotal + mulherTotal; // Calcula a contagem total

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div id="container" style={{ width: '17em' }}>
        <button onClick={resetCounters} style={{ marginLeft: '18.5em' }}>Atualizar</button>
        <div className="counter">Total: {total}</div>
        <div className="person">
          <img className="people-img" src={homem2} alt="Homem" />
          <button onClick={() => increaseCounter('homem')} style={{ backgroundColor: '#4caf50' }}>+</button>
          <button onClick={() => decreaseCounter('homem')} style={{ backgroundColor: '#f44336' }}>-</button>
          <div>Total Homem: {homeTotal}</div>
        </div>
        <div className="person">
          <img className="people-img" src={mulher2} alt="Mulher" /> 
          <button onClick={() => increaseCounter('mulher')} style={{ backgroundColor: '#4caf50' }}>+</button>
          <button onClick={() => decreaseCounter('mulher')} style={{ backgroundColor: '#f44336' }}>-</button>
          <div>Total Mulher: {mulherTotal}</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
