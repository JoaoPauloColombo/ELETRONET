import '../css/Home.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Ambiente from '../components/Ambiente.jsx';
import Welcome from '../components/Welcome.jsx';
import  Form  from '../components/Form.jsx';
import styled from 'styled-components';

const HomeContainer = styled.div`
background: #137796;
`;

function Home() {
  return (
    <HomeContainer>
      <Header />
      <Welcome />
      <Ambiente />
      <Form />
      <Footer />
    </HomeContainer>
  )
}

export default Home;