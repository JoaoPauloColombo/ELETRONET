import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';
import Produtos from './pages/Produtos';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/carrinho" element={<Carrinho />}/>
        <Route path="/produtos" element={<Produtos />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
      </Routes>
    </Router>
  );
}

export default App;