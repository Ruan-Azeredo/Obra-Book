import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Feramentas from './pages/Feramentas';
import Funcionarios from './pages/Funcionarios';

function App() {
  return (
    <div className='flex'>
      <BrowserRouter>
        <div>
          <Sidebar/>
        </div>
        <div>
          <Routes>
            <Route element={<Dashboard />} path='/dashboard' />
            <Route element={<Funcionarios />} path='/funcionarios' />
            <Route element={<Feramentas/>} path='/ferramentas'/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
