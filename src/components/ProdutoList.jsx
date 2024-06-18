import { useEffect, useState } from 'react';
import axios from 'axios';
import EditProdutoModal from './EditProdutoModal';
import {
    ListContainer,
    ProdutoCard,
    ProdutoImage,
    ProdutoInfo,
    ProdutoNome,
    ProdutoDescricao,
    Actions,
    ActionButton
} from '../css/ProdutoListStyle';

function ProdutoList({ refresh, setRefresh }) {
    const [produtos, setProdutos] = useState([]); // Estado para armazenar a lista de produtos
    const [editProduto, setEditProduto] = useState(null); // Estado para o produto a ser editado
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a abertura do modal de edição

    useEffect(() => {
        fetchProdutos(); // Ao iniciar ou quando o estado 'refresh' é alterado, busca os produtos
    }, [refresh]); // Dependência: 'refresh' (usado para forçar a atualização)

    // Função para buscar os produtos na API
    const fetchProdutos = async () => {
        try {
            const response = await axios.get('http://localhost:5000/produtos');
            if (response.data.length > 0) {
                setProdutos(response.data);
            } else {
                setProdutos([]); // Define como vazio se não houver produtos retornados
            }
        } catch (error) {
            console.error('Erro ao buscar produtos', error);
        }
    };

    // Função para deletar um produto
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/produtos/${id}`);
            setProdutos(produtos.filter((produto) => produto.id !== id)); // Remove o produto da lista local
        } catch (error) {
            console.error('Erro ao deletar o produto', error);
        }
    };

    // Função para iniciar a edição de um produto
    const handleEdit = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5000/produtos/${id}`);
            setEditProduto(response.data); // Define o produto a ser editado com os dados obtidos
            setIsModalOpen(true); // Abre o modal de edição
        } catch (error) {
            console.error('Erro ao buscar o produto para edição', error);
        }
    };

    // Função chamada após a atualização de um produto
    const handleProductUpdated = (updatedProduct) => {
        // Atualiza a lista de produtos localmente
        setProdutos(produtos.map((produto) => (produto.id === updatedProduct.id ? updatedProduct : produto)));
    };

    return (
        <ListContainer>
            {produtos.map((produto) => (
                <ProdutoCard key={produto.id}>
                    <ProdutoImage src={`http://localhost:5000/uploads/${produto.imagemName}`} alt={produto.nome} style={{ width: '100px' }} />
                    <ProdutoInfo>
                        <ProdutoNome>{produto.nome}</ProdutoNome>
                        <ProdutoDescricao>Descrição: {produto.descricao}</ProdutoDescricao>
                        <ProdutoDescricao>R${produto.preco}</ProdutoDescricao>
                        <Actions>
                            <ActionButton onClick={() => handleDelete(produto.id)}>Deletar</ActionButton>
                            <ActionButton onClick={() => handleEdit(produto.id)}>Editar</ActionButton>
                        </Actions>
                    </ProdutoInfo>
                </ProdutoCard>
            ))}
            {/* Modal de edição do produto, renderizado se 'editProduto' estiver definido */}
            {editProduto && (
                <EditProdutoModal
                    isOpen={isModalOpen}
                    onRequestClose={() => {
                        setIsModalOpen(false);
                        fetchProdutos(); // Busca os produtos novamente após fechar o modal
                    }}
                    produto={editProduto}
                    setEditProduto={setEditProduto}
                    onProductUpdated={handleProductUpdated}
                />
            )}
        </ListContainer>
    );
}

export default ProdutoList;
