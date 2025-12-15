import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Toaster
            position="bottom-center"
            toastOptions={{
                duration: 2000,
                style: {
                    background: 'rgba(15, 23, 42, 0.9)',
                    color: '#fff',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '12px 20px',
                },
                success: {
                    iconTheme: {
                        primary: '#8B5CF6',
                        secondary: '#fff',
                    },
                },
            }}
        />
        <App />
    </React.StrictMode>,
)
