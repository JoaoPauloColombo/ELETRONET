import { useState } from 'react';
import ProdutoForm from '../components/ProdutoForm';
import ProdutoList from '../components/ProdutoList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

// Estilo do container principal
const HomeContainer = styled.div`
  background: #137796;
  max-width: 100%;

  @media (max-width: 768px) {
    max-width: 90%; 
    margin: 20px auto; 
  }
`;

// Estilo do título de cadastro de produtos
const TitleProdutos = styled.div`
  width: 40%;
  color: white;
  text-align: center;
  animation-delay: 0.5s;
  border: 5px white solid;
  border-radius: 10px;
  font-size: 40px;
  font-weight: bold;
  margin: 0 auto;
  background: #089cc9;
  margin-top: 30px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 60%;
    font-size:30px;
  }
`;

// Estilo do título da lista de produtos
const ListProdutos = styled.h1`
  width: 40%; 
  color: white;
  text-align: center;
  animation-delay: 0.5s;
  border: 5px white solid;
  border-radius: 10px;
  font-size: 40px;
  font-weight: bold;
  margin: 0 auto;
  background: #089cc9;
  margin-top: 30px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 60%;
    font-size:30px;
  }
`;

function CadastroPage() {
  const [refreshState, setRefreshState] = useState(false);

  // Função para atualizar a lista de produtos
  const handleRefresh = () => {
    setRefreshState(!refreshState);
  };

  return (
    <HomeContainer>
      <Header />
      <TitleProdutos>Cadastro Produtos</TitleProdutos>
      <ProdutoForm onNewProduct={handleRefresh} />
      <ListProdutos>Produtos Cadastrados</ListProdutos>
      <ProdutoList refresh={refreshState} />
      <Footer />
    </HomeContainer>
  );
}

export default CadastroPage;
