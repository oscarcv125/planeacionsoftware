import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './clases/strings.ts'
import './clases/arrays.ts'
import './clases/objetos.ts'
import './clases/funciones.ts'

import './clases/import.ts'
import { Formulario } from './clases/Lab3/Formulario';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Formulario />
  </StrictMode>,
)
