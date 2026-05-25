import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

// Suppress unhandled promise rejections from the SDK (e.g. 404 on auth check for public apps)
// Use capture phase so this runs BEFORE the vite error handler
window.addEventListener('unhandledrejection', (event) => {
  const reason = event.reason;
  if (reason && typeof reason === 'object' && !('stack' in reason) && (reason.status >= 400)) {
    event.preventDefault();
  }
}, true);

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)