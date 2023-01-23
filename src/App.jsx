import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
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
  // const [hideSidebar, setHideSidebar] = useState(false);
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname == '/login') {
  //     setHideSidebar('hidden');
  //   }
  // }, [location]);

  return (
    <div className='flex'>
      <BrowserRouter>
        <div>
          <Sidebar/>
        </div>
        <div className='w-full'>
          <Routes>
            <Route element={<Login />} path='/login' />
            <Route element={<Dashboard />} path='/dashboard' />
            <Route element={<Funcionarios />} path='/funcionarios' />
            <Route element={<Feramentas />} path='/ferramentas' />
            <Route element={<Materiais />} path='/materiais' />
            <Route element={<Clientes />} path='/clientes' />
            <Route element={<Obras/>} path='/obras' />
            <Route element={<Planejamento />} path='/planejamento' />
            <Route element={<Relatorio/>} path='/relatorio'/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
