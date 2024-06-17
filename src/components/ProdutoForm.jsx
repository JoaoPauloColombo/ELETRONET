import { useState, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Estilização dos componentes usando styled-components
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
  max-width: 40%;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 90%;
    margin: 20px auto;
  }
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

function ProdutoForm({ onNewProduct }) {
  const [nome, setNome] = useState(''); // Estado para o nome do produto
  const [descricao, setDescricao] = useState(''); // Estado para a descrição do produto
  const [preco, setPreco] = useState(''); // Estado para o preço do produto
  const [image, setImagem] = useState(null); // Estado para a imagem do produto
  const [fileInputKey, setFileInputKey] = useState(Date.now()); // Chave para forçar a atualização do input de arquivo
  const MAX_DESC_LENGTH = 500; // Número máximo de caracteres para a descrição
  const formRef = useRef(null); // Referência para o formulário

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário
    const formData = new FormData(); // Cria um objeto FormData para enviar os dados do formulário
    formData.append('nome', nome); // Adiciona o nome ao FormData
    formData.append('descricao', descricao); // Adiciona a descrição ao FormData
    formData.append('preco', preco); // Adiciona o preço ao FormData
    formData.append('image', image); // Adiciona a imagem ao FormData

    try {
      // Faz a requisição POST para enviar os dados para o servidor
      await axios.post('http://localhost:5000/produtos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Define o cabeçalho para indicar que é um formulário multipart
        },
      });
      // Limpa os campos do formulário e atualiza a chave do input de arquivo para forçar a atualização
      setNome('');
      setDescricao('');
      setPreco('');
      setImagem(null);
      setFileInputKey(Date.now());
      onNewProduct(); // Executa a função fornecida para notificar sobre a adição de um novo produto
    } catch (error) {
      console.error('Erro ao enviar o produto', error);
    }
  };

  // Função para lidar com a mudança da imagem do produto
  const handleImageChange = (event) => {
    setImagem(event.target.files[0]); // Define a imagem selecionada no estado 'image'
  };

  // Função para lidar com a mudança na descrição do produto
  const handleDescricaoChange = (e) => {
    const texto = e.target.value; // Obtém o texto da descrição
    if (texto.length <= MAX_DESC_LENGTH) {
      setDescricao(texto); // Define a descrição no estado 'descricao' se estiver dentro do limite máximo de caracteres
    }
  };

  // Função para lidar com a mudança no preço do produto
  const handlePrecoChange = (e) => {
    const precoValue = e.target.value;
    if (precoValue >= 0) {
      setPreco(precoValue);
    } else {
      setPreco('');
      alert('Valor negativo não permitido!');
    }
  };

  return (
    <FormContainer>
      <InputPlaceholder>Nome do Produto</InputPlaceholder>
      <form onSubmit={handleSubmit} ref={formRef} encType="multipart/form-data">
        <InputContainer>
          {/* Input para o nome do produto */}
          <InputFocus
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            autoFocus
          />
        </InputContainer>
        <InputContainer>
          {/* Input para a descrição do produto */}
          <InputPlaceholderDesc>Descrição do Produto</InputPlaceholderDesc>
          <Input
            as="textarea"
            value={descricao}
            onChange={handleDescricaoChange}
            required
          />
          {/* Contador de caracteres restantes para a descrição */}
          <CharCounter>{MAX_DESC_LENGTH - descricao.length} caractere(s) restante(s)</CharCounter>
        </InputContainer>
        <InputContainer>
          {/* Input para o preço do produto */}
          <InputPlaceholder>Preço do Produto</InputPlaceholder>
          <InputFocusNumber
            type="number"
            value={preco}
            onChange={handlePrecoChange}
            required
            autoFocus
          />
        </InputContainer>
        <InputContainer>
          {/* Input para selecionar a imagem do produto */}
          <InputPlaceholderDesc>Imagem do Produto</InputPlaceholderDesc>
          <InputFocusFile type="file" key={fileInputKey} onChange={handleImageChange} required />
        </InputContainer>
        <ButtonContainer>
          {/* Botão para submeter o formulário */}
          <Button type="submit">Cadastrar</Button>
        </ButtonContainer>
        <hr />
      </form>
    </FormContainer>
  );
}

export default ProdutoForm;
