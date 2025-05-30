import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Music from './music'

createRoot(document.getElementById('music')!).render(
  <StrictMode>
    <Music />
  </StrictMode>,
)