import './App.css'
import NavBar from './components/navBar/navBar'
import "./assets/styles/main.scss"
import Header from './components/header/header'
import { Children } from 'react'
import { titlesPageLoader } from './services/loader'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          path: '/',
          element: <Header/>,
          loader: titlesPageLoader
        }
      ]
    }
  ])
 
  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  )


}

export default App
