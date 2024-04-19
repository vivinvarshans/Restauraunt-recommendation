import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Card from './components/card.jsx';
import DetailsPage from './components/DetailsPage.jsx';
import LoginSignup from './components/LoginSignup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/details",   
    element: <DetailsPage/>
  },
  {
    path: "/loginsignup",   
    element: <LoginSignup></LoginSignup>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
