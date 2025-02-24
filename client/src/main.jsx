import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyProject } from './index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyProject />
  </StrictMode>
)
