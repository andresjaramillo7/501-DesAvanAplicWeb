import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './login_class3'

createRoot(document.getElementById('home')!).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
