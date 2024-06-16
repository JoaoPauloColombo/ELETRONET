import '../css/Home.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Ambiente from '../components/Ambiente.jsx';
import Welcome from '../components/Welcome.jsx';
import  Form  from '../components/Form.jsx';


function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Ambiente />
      <Form />
      <Footer />
    </div>
  )
}

export default Home;