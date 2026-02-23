import React from 'react'
import { bancos } from './clases/Lab1/bancos'

const Bancos = () => {
  return (
    <>
    <h1>Listado de Bancos</h1>
    <ul>
        {bancos.map((a) => (
            <li key={a.id}>
                {a.id} - {a.name}
            </li>
        ))}
    </ul>
    </>
  )
}

export default Bancos