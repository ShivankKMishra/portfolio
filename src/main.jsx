import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/Home/Home';
import { Layout } from './component/Layout/Layout';
import About from './component/About/About';
import Projects from './component/Projects/Projects';
import CV from './component/CV/CV';
import ContactUS from './component/ContactUS/ContactUS';

const router =createBrowserRouter(
  [
    {
      path:'/',
      element:<Layout />,
      children:[{
        path:"",
        element:<Home />
      },
      {
        path:'about',
        element:<About />
      },
      {
        path:'Projects',
        element:<Projects />
      },
      {
        path:'CV',
        element:<CV />
      },
      {
          path:'ContactUS',
        element:<ContactUS />
      }]
    }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider  router={router}/>
  </React.StrictMode>,
)
