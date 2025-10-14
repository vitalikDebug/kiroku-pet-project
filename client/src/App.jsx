import './App.css'
import NavBar from './components/navBar/navBar'
import "./assets/styles/main.scss"
import Header from './components/header/header'
import { Children } from 'react'
import { mangaByIdPageLoader, mangaPageLoader, titlesPageLoader } from './services/loader'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Manga from './pages/manga'
import { Layout } from './pages/layout/layout'
import MangaFullDesc from './pages/mangaById'


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
        },
        {
          path: '/manga/:id',
          element: <MangaFullDesc/>,
          loader: mangaByIdPageLoader
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
