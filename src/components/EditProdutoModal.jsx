import { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import styled from 'styled-components';

Modal.setAppElement('#root'); // Configura o elemento raiz para acessibilidade

// Estilos do conteúdo do modal
const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Estilos do cabeçalho do modal
const ModalHeader = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

// Estilos do formulário
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

// Estilos dos inputs do formulário
const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

// Estilos da área de texto
const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: none;
`;

// Estilos do botão principal
const Button = styled.button`
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background: #007bff;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #394c73;
  }
`;

// Estilos do botão de cancelar
const CancelButton = styled(Button)`
  background: #ccc;
  &:hover {
    background: #999;
  }
`;

function EditProdutoModal({
  isOpen, // Indica se o modal está aberto
  onRequestClose, // Função para fechar o modal
  produto, // Produto a ser editado
  setEditProduto, // Função para definir o produto a ser editado
  fetchProdutos, // Função para buscar produtos
  setRefresh, // Função para definir o estado de atualização
  refresh, // Estado de atualização
  onProductUpdated // Função chamada após o produto ser atualizado
}) {
  const [nome, setNome] = useState(produto.nome); // Estado para o nome do produto
  const [descricao, setDescricao] = useState(produto.descricao); // Estado para a descrição do produto
  const [preco, setPreco] = useState(produto.preco); // Estado para o preço do produto
  const [image, setImagem] = useState(null); // Estado para a imagem do produto

  // Função para lidar com a submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('descricao', descricao);
    formData.append('preco', preco);
    if (image) formData.append('image', image);

    try {
      // Envia a requisição para atualizar o produto
      const response = await axios.put(`http://localhost:5000/produtos/${produto.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setEditProduto(null); // Limpa o produto a ser editado
      onRequestClose(); // Fecha o modal
      console.log('Produto atualizado com sucesso!');

      fetchProdutos(); // Busca os produtos novamente
      onProductUpdated(response.data); // Chama a função após o produto ser atualizado

      setRefresh(!refresh); // Atualiza o estado de atualização
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
    }
  };

  return (
    <Modal
      isOpen={isOpen} // Define se o modal está aberto
      onRequestClose={onRequestClose} // Função para fechar o modal
      contentLabel="Editar produto" // Rótulo do conteúdo do modal
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          padding: '0',
          overflow: 'visible'
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }
      }}
    >
      <ModalContent>
        <ModalHeader>Editar produto</ModalHeader>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome do produto"
          />
          <TextArea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição do produto"
            rows="4"
          />
          <Input
            type="number"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            placeholder="Preço do produto"
          />
          <Input type="file" onChange={(e) => setImagem(e.target.files[0])} />
          <Button type="submit">Atualizar</Button>
          <CancelButton type="button" onClick={onRequestClose}>
            Cancelar
          </CancelButton>
        </Form>
      </ModalContent>
    </Modal>
  );
}

export default EditProdutoModal;
