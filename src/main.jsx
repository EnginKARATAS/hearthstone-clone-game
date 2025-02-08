import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import './i18n'
import { isDebugging } from './constants/GameConstants'

createRoot(document.getElementById('root')).render(
  isDebugging ? (
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  ) : (
    <Provider store={store}>
      <App />
    </Provider>
  )
)
