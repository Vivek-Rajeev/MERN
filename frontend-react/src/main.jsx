import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import ThemeProvider from './Context/ThemeProvider.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import LanguageProvider from './Context/LanguageProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <LanguageProvider>
              <App />
          </LanguageProvider>
          
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
