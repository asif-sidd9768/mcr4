import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ForumContext, ForumProvider } from './contexts/ForumContext.jsx'

export {ForumContext}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ForumProvider>
      <Router>
        <App />
      </Router>
    </ForumProvider>
  </React.StrictMode>,
)
