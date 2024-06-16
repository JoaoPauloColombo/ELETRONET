import { useEffect, useState } from 'react'
import axios from 'axios'
import EditProdutoModal from './EditProdutoModal'
import PropTypes from 'prop-types'
import {
    ListContainer,
    ProdutoCard,
    ProdutoImage,
    ProdutoInfo,
    ProdutoNome,
    ProdutoDescricao,
    Actions,
    ActionButton
} from '../css/ProdutoListStyle'

function ProdutoList({ refresh, setRefresh }) {
    const [produtos, setProdutos] = useState([])
    const [editProduto, setEditProduto] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        fetchProdutos()
    }, [refresh])

    const fetchProdutos = async () => {
        try {
            const response = await axios.get(
                'http://localhost:5000/api/produtos'
                
                )
            setProdutos(response.data)
        } catch (error) {
            console.error('erro ao buscar produtos', error)
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(
                `http://localhost:5000/produtos/${id}`
                
                )
            fetchProdutos()
        } catch (error) {
            console.error('Erro ao deletar o produto', error)
        }
    }

    const handleEdit = async (id) => {
        try {
            const response = await axios.get(
                `http://localhost:5000/produtos/${id}`
                
                )
            setEditProduto(response.data)
            setIsModalOpen(true)
        } catch (error) {
            console.error('Erro ao buscar o produto para edição', error)
        }
    }

    return (
        <ListContainer>
            {produtos.map((produto) => (
                <ProdutoCard key={produto.id}>
                    <ProdutoImage src={
                        `http://localhost:5000/uploads/${produto.foto}`
                        
                        } alt={produto.nome} style={{ width: '100px' }} />
                    <ProdutoInfo>
                        <ProdutoNome>{produto.nome}</ProdutoNome>
                        <ProdutoDescricao>Descrição: <br/> {produto.texto}</ProdutoDescricao>
                        <ProdutoDescricao>R${produto.preco},00</ProdutoDescricao>
                        <Actions>
                            <ActionButton onClick={() => handleDelete(produto.id)}>Deletar</ActionButton>
                            <ActionButton onClick={() => handleEdit(produto.id)}>Editar</ActionButton>
                        </Actions>
                    </ProdutoInfo>
                </ProdutoCard>
            ))}
            {editProduto && (
                <EditProdutoModal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    produto={editProduto}
                    setRefresh={setRefresh}
                    setEditProduto={setEditProduto}
                />
            )}
        </ListContainer>
    )
}

ProdutoList.propTypes = {
  refresh: PropTypes.bool.isRequired,
  setRefresh: PropTypes.func.isRequired,
}

export default ProdutoList;