import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../css/ProdutoCard.css'; // Importa o arquivo de estilos para os cards de produto

function ProdutosCard() {
  const [produtos, setProdutos] = useState([]); // Estado para armazenar os produtos obtidos da API
  const navigate = useNavigate(); // Hook useNavigate para navegação programática

  // Hook useEffect para buscar os produtos ao montar o componente
  useEffect(() => {
    fetchProdutos(); // Função para buscar os produtos da API
  }, []);

  // Função assíncrona para buscar os produtos da API
  const fetchProdutos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/produtos'); // Faz a requisição GET para obter os produtos
      if (response.data.length > 0) {
        setProdutos(response.data); // Atualiza o estado 'produtos' com os dados obtidos da API
      } else {
        setProdutos([]); // Define um array vazio caso não haja produtos na resposta
      }
    } catch (error) {
      console.error('Erro ao buscar produtos', error); // Exibe um erro caso ocorra um problema na requisição
    }
  };

  // Função para lidar com o clique no botão "Saiba Mais"
  const handleLearnMore = (id) => {
    navigate(`/bio/${id}`); // Navega para a rota específica do produto usando o hook useNavigate
  };

  return (
    <div>
      <h1 className="main-title">Produtos</h1> {/* Título principal da página */}
      <div className="container">
        {/* Mapeia os produtos e renderiza um card para cada um */}
        {produtos.map((produto) => (
          <div key={produto.id} className="image-card">
            {/* Imagem do produto */}
            <img
              src={`http://localhost:5000/uploads/${produto.imagemName}`} // URL da imagem baseada no nome fornecido pela API
              alt={produto.nome} // Texto alternativo para acessibilidade
              className="styled-image" // Classe para estilização da imagem
            />
            {/* Nome do produto */}
            <h2 className="sub-title">{produto.nome}</h2>
            {/* Preço do produto */}
            <h2 className="number">R${produto.preco}</h2>
            {/* Botão "Saiba Mais" que chama a função handleLearnMore ao ser clicado */}
            <button onClick={() => handleLearnMore(produto.id)} className="button">Saiba Mais</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProdutosCard;
