import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Candidaturas from './components/pages/Candidaturas';
import Contacto from './components/pages/Contacto';
import DetalheVaga from './components/pages/DetalheVaga';
import Inicio from './components/pages/Inicio';
import Servicos from './components/pages/Servicos';
import Sobre from './components/pages/Sobre';
import Vagas from './components/pages/Vagas';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/servicos' element={<Servicos />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/vagas' element={<Vagas />} />
          <Route path='/contactos' element={<Contacto />} />
          <Route path='/candidaturas' element={<Candidaturas />} />
          <Route path='/detalhe/vaga' element={<DetalheVaga Titulo="Analista de Dados Senior"/>}/>
        </Routes>
       
      </Router>

    </div>
  );
}

export default App;
