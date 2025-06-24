import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Router/Routes.jsx'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div className='max-w-10/12 mx-auto font-urbanist'>
       <RouterProvider router={router} />
     </div>
  </StrictMode>,
)
