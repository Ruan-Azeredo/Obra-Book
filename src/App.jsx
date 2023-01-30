import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation, redirect, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import ObjecttContext from './contexts/ObjecttContext';
import Clientes from './pages/Clientes';
import Dashboard from './pages/Dashboard';
import Feramentas from './pages/Feramentas';
import Funcionarios from './pages/Funcionarios';
import Login from './pages/Login';
import Materiais from './pages/Materiais';
import Obras from './pages/Obras';
import Planejamento from './pages/Planejamento';
import Relatorio from './pages/Relatorio';

function App() {
  const { EngineerId } = useContext(ObjecttContext)

  const [hideSidebar, setHideSidebar] = useState('hidden');
  const location = document.location.pathname
  console.log('location: ', location)

  const [rout, setRout] = useState()
  useEffect(() => {
    if (location != '/login' && EngineerId == true) {
      setHideSidebar('');
      setRout(
        null
      )
    } else if(location != '/login'){
      setRout(
        <Navigate replace to='/login' />
      )
    } else {
      setRout(null)
    }
  }, [location, rout])

  return (
    <div className='flex'>
      <BrowserRouter>
        <div className={`${hideSidebar}`}>
          <Sidebar/>
        </div>
        <div className='w-full'>
        <Routes>
          <Route element={<Dashboard />} path='/dashboard' />
          <Route element={<Funcionarios />} path='/funcionarios' />
          <Route element={<Feramentas />} path='/ferramentas' />
          <Route element={<Materiais />} path='/materiais' />
          <Route element={<Clientes />} path='/clientes' />
          <Route element={<Obras />} path='/obras' />
          <Route element={<Planejamento />} path='/planejamento' />
          <Route element={<Relatorio />} path='/relatorio' />
        </Routes>
            {rout}
          <Routes>
            <Route element={<Login />} path='/login' />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
