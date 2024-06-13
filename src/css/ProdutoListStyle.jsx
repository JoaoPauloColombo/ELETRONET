//ProdutoListStyle.js
import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const ProdutoCard = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #089cc9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const ProdutoImage = styled.img`
  width: 30%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    width: 40%;
  }
`;

export const ProdutoInfo = styled.div`
  flex: 1;
`;

export const ProdutoNome = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-size: 1.2em;
  color: white;
`;

export const ProdutoDescricao = styled.p`
  margin: 0;
  margin-bottom: 10px;
  color: white;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

export const ActionButton = styled.button`
  padding: 5px 10px;
  font-size: 0.9em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:first-child {
    background-color: #dc3545;

    &:hover {
      background-color: #c82333;
    }
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 20px;
`