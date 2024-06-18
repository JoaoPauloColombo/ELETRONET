import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

// Estilos dos componentes
const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
  background: linear-gradient(to bottom, #089cc9, #137796);
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Image = styled.img`
  flex-shrink: 0;
  width: 300px;
  height: 300px;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.p`
  text-align: justify;
  color: white;
`;

const Title = styled.h2`
  text-align: left;
  color: white;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #089cc9;
  color: white;
  cursor: pointer;
  align-self: flex-start;
  &:hover {
    background-color: #394c73;
  }
`;

function BioContent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState(null);

  // Buscar produto pelo ID
  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/produtos/${id}`);
        setProduto(response.data);
      } catch (error) {
        console.error('Erro ao buscar produto', error);
      }
    };

    fetchProduto();
  }, [id]);

  // Função para voltar à página anterior
  const handleBack = () => {
    navigate(-1);
  };

  // Exibir mensagem de carregamento enquanto o produto não for carregado
  if (!produto) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <Header />
      <Container>
        <Content>
          <Image src={`http://localhost:5000/uploads/${produto.imagemName}`} alt={produto.nome} />
          <TextContainer>
            <Title>Nome: {produto.nome}</Title>
            <Text>Descrição: {produto.descricao}</Text>
            <Text>R$ {produto.preco}</Text>
            <Button onClick={handleBack}>Voltar</Button>
          </TextContainer>
        </Content>
      </Container>
      <Footer />
    </div>
  );
}

export default BioContent;
