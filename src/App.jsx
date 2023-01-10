import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className='flex'>
      <BrowserRouter>
        <div>
          <Sidebar/>
        </div>
        <div>
          <Routes>
            <Route element={<Dashboard/>} path='/dashboard'/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
