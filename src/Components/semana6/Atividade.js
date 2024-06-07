import React, { useState } from 'react'

export default function Atividade() {
  const [valor, setValor] = useState(0);
  const [texto, setTexto] = useState('');
  const [estatisticasCaracteres, setEstatisticasCaracteres] = useState({
    comprimento: 0,
    letras: 0,
    numeros: 0,
    simbolos: 0,
    espacos: 0
  });

  const atualizarValor = (operacao) => {
    let novoValor;
    switch (operacao) {
      case '+':
        novoValor = valor + 1;
        break;
      case '-':
        novoValor = valor - 1;
        break;
      case '*':
        novoValor = valor * 2;
        break;
      case '/':
        novoValor = valor / 2;
        break;
      case 'x^2':
        novoValor = valor * valor;
        break;
      case 'x^3':
        novoValor = valor * valor * valor;
        break;
      case '0':
        novoValor = 0;
        break;
      default:
        novoValor = valor;
    }
    setValor(novoValor);
  };

  const handleTextChange = (e) => {
    const textoDigitado = e.target.value;
    setTexto(textoDigitado);
    const letras = (textoDigitado.match(/[a-zA-Z]/g) || []).length;
    const numeros = (textoDigitado.match(/[0-9]/g) || []).length;
    const simbolos = (textoDigitado.match(/[^a-zA-Z0-9\s]/g) || []).length;
    const espacos = (textoDigitado.match(/\s/g) || []).length;
    setEstatisticasCaracteres({
      comprimento: textoDigitado.length,
      letras,
      numeros,
      simbolos,
      espacos
    });
  };

  return (
    <div className="App">
      <h1>DINÂMICA - REGEX</h1>
      <h2> - CONTADORES FUNCIONAIS - </h2>
      <h3>Valor: {valor}</h3>
      <div className="buttons">
        <button onClick={() => atualizarValor('+')}>+</button>
        <button onClick={() => atualizarValor('-')}>-</button>
        <button onClick={() => atualizarValor('*')}>*</button>
        <button onClick={() => atualizarValor('/')}>/</button>
        <button onClick={() => atualizarValor('x^2')}>x²</button>
        <button onClick={() => atualizarValor('x^3')}>x³</button>
        <button onClick={() => atualizarValor('0')}>0</button>
      </div>
      <h3>Contador de Caracteres</h3>
      <input
        type="text"
        value={texto}
        onChange={handleTextChange}
        placeholder="Digite algo"
      />
      <div className="estatisticasCaracteres">
        <p>Comprimento do Texto: {estatisticasCaracteres.comprimento}</p>
        <p>Letras: {estatisticasCaracteres.letras}</p>
        <p>Números: {estatisticasCaracteres.numeros}</p>
        <p>Símbolos: {estatisticasCaracteres.simbolos}</p>
        <p>Espaços: {estatisticasCaracteres.espacos}</p>
      </div>
    </div>
  );
}