import React, { useState, useEffect } from 'react';

function Relogio() {
  const [hora, setHora] = useState('');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');

  useEffect(() => {
    const atualizarHoraData = () => {
      let relogio = new Date();
      relogio.setTime(relogio.getTime() - 3 * 60 * 60 * 1000); // Ajuste de fuso horário, se necessário
      let horaAtual = relogio.toISOString().substring(11, 19);
      let diaAtual = ('0' + relogio.getDate()).slice(-2); // Formata o dia com zero à esquerda
      let mesAtual = ('0' + (relogio.getMonth() + 1)).slice(-2); // Formata o mês com zero à esquerda
      let anoAtual = relogio.getFullYear();

      setHora(horaAtual);
      setDia(diaAtual);
      setMes(mesAtual);
      setAno(anoAtual);
    };

    const intervalID = setInterval(atualizarHoraData, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      <div>
        <h2>RELÓGIO</h2>
        <p>{`${dia}/${mes}/${ano}`}</p>  
        <p>{hora}</p>
      </div>
    </>
  );
}

export default Relogio;
