import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

// Suppress unhandled promise rejections from the SDK (e.g. 404 on auth check for public apps)
window.addEventListener('unhandledrejection', (event) => {
  const reason = event.reason;
  if (reason && typeof reason === 'object' && (reason.status === 404 || reason.status === 401 || reason.status === 403) && reason.message === '') {
    event.preventDefault();
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)