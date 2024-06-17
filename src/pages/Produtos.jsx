import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProdutosCard from '../components/ProdutoCard';
import styled from 'styled-components';

// Estilo do container principal
const HomeContainer = styled.div`
  background: #137796;
`;

function Persona() {
  const [characters, setCharacters] = useState([]);

  // Efeito para buscar produtos da API ao montar o componente
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/produtos');
        setCharacters(response.data);
      } catch (error) {
        console.error('Erro ao buscar o produto', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <HomeContainer>
      <Header />
      <ProdutosCard characters={characters} />
      <Footer />
    </HomeContainer>
  );
}

export default Persona;
