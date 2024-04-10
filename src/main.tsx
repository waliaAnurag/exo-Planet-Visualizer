import React from 'react'
import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n.js'

const Loader = () => <div>loading...</div>;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
    
      <App />
    </Suspense>
  </React.StrictMode>,
)
