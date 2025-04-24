import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MilestonesMenu from './MilestonesMenu'
createRoot(document.getElementById('global')!).render(
  <StrictMode>
    <MilestonesMenu />
  </StrictMode>,
)
