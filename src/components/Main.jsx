
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/Main1.png'
import img2 from '../assets/images/Main2.png'
import img3 from '../assets/images/Main3.png'
import '../css/Main.css'

function Main() {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img style={{height:'80vh'}}
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h1 >Relógios Masculinos</h1>
        <h2>com 20% de desconto</h2>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'80vh'}}
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h1>PC GAMER na ELETRONET</h1>
        <h2>a partir de R$3.500</h2>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'80vh'}}
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption>
      <h1>Fones de Ouvido</h1>
      <h2>com 40% de desconto</h2>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Main;