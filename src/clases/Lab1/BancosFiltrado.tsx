// Componente de BancosFiltrados creado y generado por Claude Haiku 4.5

import React, { useState } from 'react';

interface Banco {
  id: number;
  name: string;
  country: string;
}

export const bancos: Banco[] = [
  { id: 1, name: 'Banorte', country: 'Mexico' },
  { id: 2, name: 'BBVA', country: 'Spain' },
  { id: 3, name: 'Scotiabank', country: 'Canada' },
  { id: 4, name: 'Citibank', country: 'USA' },
  { id: 5, name: 'Santander', country: 'Spain' },
  { id: 6, name: 'Nu Bank', country: 'Brazil' },
  { id: 7, name: 'Galicia Bank', country: 'Argentina' },
  { id: 8, name: 'Sabadell', country: 'Catalunya' },
];

const BancosFiltrado: React.FC = () => {
  const [paisSeleccionado, setPaisSeleccionado] = useState<string>('');

  // Obtener países únicos de la lista de bancos
  const paises: string[] = Array.from(new Set(bancos.map((banco) => banco.country)));

  // Filtrar bancos según el país seleccionado
  const bancosFiltrados: Banco[] = paisSeleccionado
    ? bancos.filter((banco) => banco.country === paisSeleccionado)
    : bancos;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Bancos por País</h1>

      {/* Selector de país */}
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="pais-select" style={{ marginRight: '10px', fontWeight: 'bold' }}>
          Filtrar por país:
        </label>
        <select
          id="pais-select"
          value={paisSeleccionado}
          onChange={(e) => setPaisSeleccionado(e.target.value)}
          style={{
            padding: '8px 12px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            cursor: 'pointer',
          }}
        >
          <option value="">Todos los países</option>
          {paises.map((pais) => (
            <option key={pais} value={pais}>
              {pais}
            </option>
          ))}
        </select>
      </div>

      {/* Información de resultados */}
      <p style={{ color: '#666', marginBottom: '15px' }}>
        Mostrando {bancosFiltrados.length} de {bancos.length} bancos
      </p>

      {/* Lista de bancos */}
      <div>
        {bancosFiltrados.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {bancosFiltrados.map((banco) => (
              <li
                key={banco.id}
                style={{
                  padding: '12px',
                  marginBottom: '10px',
                  backgroundColor: '#f5f5f5',
                  borderLeft: '4px solid #007bff',
                  borderRadius: '4px',
                }}
              >
                <strong>{banco.name}</strong> - {banco.country}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: '#999' }}>No hay bancos para este país</p>
        )}
      </div>
    </div>
  );
};

export default BancosFiltrado;