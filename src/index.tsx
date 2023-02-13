import React from 'react'
import ReactDOM from 'react-dom/client'
import "index.css"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Signin, Signup, Todo } from './pages'
import axios from 'axios'
import { TodosStore } from 'context/todos'

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/todo",
    element: <Todo/>,
  },
])

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement )

root.render(
  <React.StrictMode>
    <TodosStore>
      <RouterProvider router={router}/>
    </TodosStore>
  </React.StrictMode>
)

axios.defaults.withCredentials = true
