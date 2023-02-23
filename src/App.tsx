import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Aplicacao from './components/Aplicacao'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <ListaVagas />
  },
  {
    path: '/vagas/:id',
    element: <Aplicacao />
  }
])

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <RouterProvider router={rotas} />
      </div>
    </>
  )
}

export default App
