import '../css/Promocao.css'
import PromocaoImg from '../assets/images/Promocao.avif'

function Promocao() {

  return (
<div className="cardUnico">
        <div className="card__skeleton">
            <img src={PromocaoImg} />
            <ul>
                <li>
                    <h1>Produtos vendidos : <b>0</b></h1>
                </li>
                <li>
                    <div className="Info-produto">
                        <h1 className="name">Notebook Gamer Dell Alienware</h1>
                        <h1 className="valor">R$ 25.547,00</h1>
                    </div>
                </li>
                <li>
                    <h1>Disponiveis : <b>15</b></h1>
                </li>
            </ul>
        </div>
        <div className="card__description"></div>
    </div>
  )
}

export default Promocao
