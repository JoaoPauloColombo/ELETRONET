import { useState, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: linear-gradient(to bottom, #089cc9, #066683);
  border-radius: 10px;
  overflow: hidden;
  perspective: 1000px;
  transform-style: preserve-3d;
  transform: rotateX(-10deg);
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  animation: form-animation 0.5s ease-in-out;
  width: 30%;
  font-weight: 800;
  @media (max-width: 768px) {
    width: 80%;
    left: 6%;
  }
  position: relative;
  left: 34%;
  top:20%
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  background-color: transparent;
  color: #fff;
  border: 2px solid #089cc9;
  transition: border-color 0.3s ease-in-out;
  width:80%;
`;

const InputFocus = styled(Input)`
  border-color: #089cc4;
  background-color: #089cc9;
  outline: none;
  width:80%;
`;

const InputFocusNumber = styled(Input)`
  border-color: #089cc4;
  background-color: #089cc9;
  outline: none;
  width:40%;
`;

const InputFocusFile = styled(Input)`
  border-color: #089cc4;
  background-color: #089cc9;
  outline: none;
  width:80%;
  font-size:10px;
`;

const InputPlaceholder = styled.span`
  display: block;
  margin: 0 auto;
  padding: 10px;
  color: #fff;
  padding-bottom: 30px;
`;

const InputPlaceholderDesc = styled.span`
  padding: 10px;
  color: #fff;
  padding-bottom: 30px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #089cc9;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  &:hover {
    background-color: #19b543;
    font-size: 17px;
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`;

const CharCounter = styled.div`
  color: white;
`;

function ProdutoForm({ fetchProdutos }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now());
  const MAX_DESC_LENGTH = 500;
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('texto', descricao);
    formData.append('preco', preco);
    formData.append('foto', imagem);

    try {
      await axios.post(
        'http://localhost:5000/api/produtos',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setNome('');
      setDescricao('');
      setPreco('');
      setImagem(null);
      setFileInputKey(Date.now());
    } catch (error) {
      console.error('Erro ao enviar a produto', error);
    }
  };

  const handleImageChange = (event) => {
    setImagem(event.target.files[0]);
  };

  const handleDescricaoChange = (e) => {
    const texto = e.target.value;
    if (texto.length <= MAX_DESC_LENGTH) {
      setDescricao(texto);
    }
  };

  return (
    <FormContainer>
      <InputPlaceholder>Nome do Produto</InputPlaceholder>
      <form onSubmit={handleSubmit} ref={formRef}>
        <InputContainer>
          <InputFocus
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            autoFocus
          />
        </InputContainer>
        <InputContainer>
          <InputPlaceholderDesc>Descrição do Produto</InputPlaceholderDesc>
          <Input
            as="textarea"
            value={descricao}
            onChange={handleDescricaoChange}
            required
          />
          <CharCounter>{MAX_DESC_LENGTH - descricao.length} caractere(s) restante(s)</CharCounter>
        </InputContainer>
        
        <InputContainer>
        <InputPlaceholder>Preço do Produto</InputPlaceholder>
          <InputFocusNumber
            type="number"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
            autoFocus
          />
        </InputContainer>
        <InputContainer>
        <InputPlaceholderDesc>Imagem do Produto</InputPlaceholderDesc>
        <InputFocusFile type="file" key={fileInputKey} onChange={handleImageChange} required />
        </InputContainer>
        <ButtonContainer>
          <Button type="submit">Cadastrar</Button>
        </ButtonContainer>
        <hr />
      </form>
    </FormContainer>
  );
}

ProdutoForm.propTypes = {
  fetchProdutos: PropTypes.func.isRequired,
};

export default ProdutoForm;