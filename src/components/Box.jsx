import '../css/Box.css';
import Box1 from '../assets/images/relogio.png';
import Box2 from '../assets/images/Headset5.png';


function Cards() {
  return (
    <div className="quadrados">
    <div className="container">
        <div className="cardProdutosVictor">
            <p>Acessorios</p>
  
            <img src={Box1} alt="relogio"/>
            <h1>Relógio Smartwatch Haylou Gs Bluetooth 5.0 Tela Amoled 1.28</h1>
            <p className="precoAntigo">R$2500,00</p>
        </div>

        <div className="cardProdutosVictor">
            <p>Fone de Ouvido</p>
            <img src={Box2} alt="headset"/>
            <h1>Relógio Smartwatch Haylou Gs Bluetooth 5.0 Tela Amoled 1.28</h1>
            <p className="precoNovo">R$2500,00</p>
            <p className="precoAntigo">R$3000,00</p>

        </div>

        <div className="cardProdutosVictor">
            <p>Acessorios</p>
            <img src={Box1} alt="relogio"/>
            <h1>Relógio Smartwatch Haylou Gs Bluetooth 5.0 Tela Amoled 1.28</h1>
            <p className="precoAntigo">R$2500,00</p>
        </div>

        <div className="cardProdutosVictor">         
            <p>Fone de Ouvido</p>
            <img src={Box2} alt="headset"/>
            <h1>Relógio Smartwatch Haylou Gs Bluetooth 5.0 Tela Amoled 1.28</h1>
            <p className="precoNovo">R$2500,00</p>
            <p className="precoAntigo">R$3000,00</p>
        </div>
    </div>
    <div className="container">
        <div className="cardProdutosVictor">
            <p>Acessorios</p>
            <img src={Box1} alt="relogio"/>
            <h1>Relógio Smartwatch Haylou Gs Bluetooth 5.0 Tela Amoled 1.28</h1>
            <p className="precoAntigo">R$2500,00</p>
        </div>

        <div className="cardProdutosVictor">
            <p>Fone de Ouvido</p>
            <img src={Box2} alt="headset"/>
            <h1>Relógio Smartwatch Haylou Gs Bluetooth 5.0 Tela Amoled 1.28</h1>
            <p className="precoNovo">R$2500,00</p>
            <p className="precoAntigo">R$3000,00</p>
        </div>

        <div className="cardProdutosVictor">
            <p>Acessorios</p>
            <img src={Box1} alt="relogio"/>
            <h1>Relógio Smartwatch Haylou Gs Bluetooth 5.0 Tela Amoled 1.28</h1>
            <p className="precoAntigo">R$2500,00</p>
        </div>

        <div className="cardProdutosVictor">
            <p>Fone de Ouvido</p>
            <img src={Box2} alt="headset"/>
            <h1>Relógio Smartwatch Haylou Gs Bluetooth 5.0 Tela Amoled 1.28</h1>

            <p className="precoNovo">R$2500,00</p>
            <p className="precoAntigo">R$3000,00</p>
        </div>
    </div>
</div>
  );
}

export default Cards;