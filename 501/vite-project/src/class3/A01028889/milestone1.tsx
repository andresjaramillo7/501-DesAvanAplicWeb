import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Milestone1Menu from './milestone1Menu'

createRoot(document.getElementById('milestone1')!).render(
  <StrictMode>
    <Milestone1Menu />
  </StrictMode>,
)
