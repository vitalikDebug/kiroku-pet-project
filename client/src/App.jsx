import './App.css'
import NavBar from './components/navBar/navBar'
import "./assets/styles/main.scss"
import Header from './components/header/header'
import { Children } from 'react'
import { mangaPageLoader, titlesPageLoader } from './services/loader'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Manga from './pages/manga'
import { Layout } from './pages/layout/layout'


function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Header/>,
          loader: titlesPageLoader
        },
        {
          path: '/manga',
          element: <Manga/>,
          loader: mangaPageLoader
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
