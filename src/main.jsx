import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Router/Router.jsx'
import AuthProvider from './Provider/AuthProvider'
import Provider from './Provider/Provider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider> <RouterProvider router={routes}></RouterProvider></Provider>
    </AuthProvider>

  </React.StrictMode>,
)
