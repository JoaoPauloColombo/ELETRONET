import Header from '../components/Header.jsx'
import Main from '../components/Main.jsx'
import Cards from '../components/Cards.jsx'
import Footer from '../components/Footer.jsx'
import Box from '../components/ProdutoCard.jsx'
import Vendidos from '../components/Vendidos.jsx'
import Vendidos2 from '../components/Vendidos2.jsx'
import Promocao from '../components/Promocao.jsx'
import '../css/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import axios from  'axios'

function Home(){
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
    <div>
    <Header />
    <Main />
    <Cards />
    <br />
    <Box characters={characters} />
    <Vendidos/>
    <Vendidos2/>
    <Promocao/>
    <Footer />
    </div>
  )
}
 
export default Home;