// Componente de Contador creado y generador por Claude Haiku 4.5

import React, { useState } from 'react';

const Contador: React.FC = () => {
  // Variable de estado para almacenar el valor del contador
  const [contador, setContador] = useState<number>(0);

  // Función para incrementar el contador
  const incrementar = (): void => {
    setContador(contador + 1);
  };

  // Función para decrementar el contador
  const decrementar = (): void => {
    setContador(contador - 1);
  };

  // Función para reiniciar el contador
  const reiniciar = (): void => {
    setContador(0);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Contador</h1>
      <p style={{ fontSize: '36px', fontWeight: 'bold' }}>{contador}</p>
      <button onClick={incrementar} style={{ margin: '5px', padding: '10px 20px' }}>
        Incrementar
      </button>
      <button onClick={decrementar} style={{ margin: '5px', padding: '10px 20px' }}>
        Decrementar
      </button>
      <button onClick={reiniciar} style={{ margin: '5px', padding: '10px 20px' }}>
        Reiniciar
      </button>
    </div>
  );
};

export default Contador;