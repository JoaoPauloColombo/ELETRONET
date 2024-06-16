import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Welcome from '../components/Welcome.jsx'
import Ambiente from '../components/Ambiente.jsx'
import Form from '../components/Form.jsx'
import '../css/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(){

  return(
    <div>
    <Header />
    <Welcome/>
    <Ambiente />
    <Form />
    <Footer />
    </div>
  )
}
 
export default Home;