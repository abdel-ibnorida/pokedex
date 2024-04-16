import './App.css'
import PageHome from './pages/PageHome'
import PagePokedex from './pages/PagePokedex'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PageHome></PageHome>
      ),
    },
    {
      path: "/pokedex",
      element: (
        <PagePokedex></PagePokedex>
      ),
    },
  ]);
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
