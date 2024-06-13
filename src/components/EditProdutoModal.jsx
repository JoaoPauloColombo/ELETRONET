import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';

Modal.setAppElement('#root');

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: none;
`;

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

const CancelButton = styled(Button)`
  background: #ccc;
  &:hover {
    background: #999;
  }
`;

const CharacterCount = styled.div`
  text-align: right;
  margin-bottom: 10px;
  color: #666;
`;

function EditProdutoModal({ isOpen, onRequestClose, produto, setRefresh, setEditproduto }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState(null);
  const MAX_DESC_LENGTH = 500;

  useEffect(() => {
    if (produto) {
      setNome(produto.nome);
      setDescricao(produto.texto);
      setPreco(produto.preco);
    }
  }, [produto]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (nome) formData.append('nome', nome);
    if (descricao) formData.append('texto', descricao);
    if (preco) formData.append('preco', preco);
    if (imagem) formData.append('foto', imagem);

    try {
      const response = await axios.put(
        `http://localhost:5000/api/produtos/${produto.id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setRefresh((prev) => !prev);
      setEditproduto(null);
      onRequestClose();
      console.log('produto updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating produto:', error);
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
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Editar produto"
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
          overflow: 'visible',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <ModalContent>
        <ModalHeader>Editar produtos</ModalHeader>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome do produto"
          />
          <TextArea
            value={descricao}
            onChange={handleDescricaoChange}
            placeholder="Descrição do produto"
            rows="4"
          />
          <CharacterCount>
            {MAX_DESC_LENGTH - descricao.length} caracteres restantes
          </CharacterCount>
          <TextArea
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            placeholder="Preço do produto"
          />
          <Input type="file" onChange={handleImageChange} />
          <Button type="submit">Atualizar</Button>
          <CancelButton type="button" onClick={onRequestClose}>
            Cancelar
          </CancelButton>
        </Form>
      </ModalContent>
    </Modal>
  );
}

EditProdutoModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    produto: PropTypes.object.isRequired,
    setRefresh: PropTypes.func.isRequired,
    setEditproduto: PropTypes.func.isRequired,
  };
  
  export default EditProdutoModal;