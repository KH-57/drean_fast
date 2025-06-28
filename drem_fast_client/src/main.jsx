import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Router/Routes.jsx'
import { RouterProvider } from 'react-router'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import AuthProvider from './Context/AuthProvider/AuthProvider.jsx'
 AOS.init();



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div className='max-w-10/12 mx-auto font-urbanist'>
      <AuthProvider>
         <RouterProvider router={router} />
      </AuthProvider>
     </div>
  </StrictMode>,
)
