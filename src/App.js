import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Cadastro from './pages/Cadastro';
import Bio from './pages/Bio';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<Home />} />

        {/* Rota para a página de produtos */}
        <Route path="/produtos" element={<Produtos />} />

        {/* Rota para a página de cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Rota dinâmica para exibir detalhes de um produto específico */}
        <Route path="/bio/:id" element={<Bio />} />
      </Routes>
    </Router>
  );
}

export default App;
