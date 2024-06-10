import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Cards from './components/Cards.jsx'
import Footer from './components/Footer.jsx'
import Box from './components/Box.jsx'
import Vendidos from './components/Vendidos.jsx'
import Vendidos2 from './components/Vendidos2.jsx'
import Promocao from './components/Promocao.jsx'
import './css/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Cards />
    <br />
    <Box />
    <Vendidos/>
    <Vendidos2/>
    <Promocao/>
    <Footer />
  </React.StrictMode>,
)
