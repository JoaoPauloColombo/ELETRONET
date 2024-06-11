import { useEffect, useState } from 'react'
import axios from  'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProdutosCard from '../components/ProdutoCard'
import styled from 'styled-components';

const HomeContainer = styled.div`
background: #0c5b74;
`;

function Persona(){
    const [characters, setcharacters] = useState([])

    useEffect(() =>{
        const fetchcharacters = async () =>{
            try{
                const response = await axios.get('http://localhost:5000/api/produtos')
                setcharacters(response.data)
            } catch (error){
                console.error('Erro ao buscar o produto', error)
            }
        }

        fetchcharacters()
    }, [])
    return(
        <HomeContainer>
            <Header/>
            <ProdutosCard characters={characters}/>
            <Footer/>
        </HomeContainer>
    );
}
export default Persona
