import { createRoot } from 'react-dom/client'

import AppRouter from './AppRouter'

import './index.css'
import { SessionProvider } from './context/SessionProvider'

createRoot(document.getElementById('root')).render(
  <SessionProvider>
    <AppRouter />
  </SessionProvider>
)
