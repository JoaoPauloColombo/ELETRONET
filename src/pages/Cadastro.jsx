import { useState } from 'react';
import ProdutoForm from '../components/ProdutoForm';
import ProdutoList from '../components/ProdutoList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const ShadowBox = styled.hr`
-webkit-box-shadow: 11px 44px 46px 10px rgba(0,0,0,0.75);
-moz-box-shadow: 11px 44px 46px 10px rgba(0,0,0,0.75);
box-shadow: 11px 44px 46px 10px rgba(0,0,0,0.75);
`;



const TitleProdutos = styled.h1`
  color: white;
  text-align:center;
  align-items: center;
  justify-content: center;
  animation-delay: 0.5s;
`;

const ListProdutos = styled.h1`
  color: white;
  position: relative;
  text-align:center;
  align-items: center;
  justify-content: center;
`;

function CadastroPage() {
  const [refresh, setRefresh] = useState(false);
  return (
    <div>
        <Header />
        <ShadowBox/>
        <TitleProdutos>Cadastro Produtos</TitleProdutos>
        <ProdutoForm setRefresh={setRefresh} />
        <ListProdutos>Produtos Cadastrados</ListProdutos>
        <ProdutoList refresh={refresh} setRefresh={setRefresh}/>
        <Footer />
    </div>
  );
}

export default CadastroPage;