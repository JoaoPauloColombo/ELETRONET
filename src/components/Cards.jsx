import '../css/Cards.css';
import Cards1 from '../assets/images/Card1.png';
import Cards2 from '../assets/images/Card2.png';
import Cards3 from '../assets/images/Card3.png';
import Proximo from '../assets/images/Proximo.png';
import Recentes1 from '../assets/images/Recentes1.png';
import Recentes2 from '../assets/images/Recentes2.png';
import Recentes3 from '../assets/images/Recentes3.png';
import Recentes4 from '../assets/images/Recentes4.png';

function Cards() {
  return (
    <div>
      <section className="menu-promocoesCard">
        <div className="containerCard">
          <div className="conteudoCard">
            <div className="imageCard"><img src={Cards1} alt="" /></div>
            <div className="contentCard">
              <h2 className="content-oneCard">Melhores negocios</h2>
              <a href="#">
                <h4 className="content-twoCard">Compre agora <img className="img2Card" src={Proximo} alt="" width="11px" /></h4>
              </a>
            </div>
          </div>

          <div className="conteudoCard">
            <div className="imageCard"><img src={Cards2} alt="" /></div>
            <div className="contentCard">
              <h2 className="content-oneCard">Melhores negocios</h2>
              <a href="#">
                <h4 className="content-twoCard">Compre agora <img className="img2Card" src={Proximo} alt="" width="11px" /></h4>
              </a>
            </div>
          </div>

          <div className="conteudoCard">
            <div className="imageCard"><img src={Cards3} alt="" /></div>
            <div className="contentCard">
              <h2 className="content-oneCard">Melhores negocios</h2>
              <a href="#">
                <h4 className="content-twoCard">Compre agora <img className="img2Card" src={Proximo} alt="" width="11px" /></h4>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="produtos-recentesCard">
        <h4 className="headingCard">Produtos <span> Recentes</span></h4>

        <div className="box-containerCard">
          <div className="boxCard">
            <img src={Recentes1} alt="" />
            <h4>Controle DualSense</h4>
            <div className="precoCard">R$480,00 <span>500,00</span></div>
            <a href="#" className="btn clicCard">Adiquirir</a>
          </div>

          <div className="boxCard">
            <img src={Recentes2} alt="" />
            <h4>Monitor Samsung</h4>
            <div className="precoCard">R$600,00 <span>699,90</span></div>
            <a href="#" className="btn clicCard">Adiquirir</a>
          </div>

          <div className="boxCard">
            <img src={Recentes3} alt="" />
            <h4>Mouse Vaiper</h4>
            <div className="precoCard">R$800,90 <span>899,90</span></div>
            <a href="#" className="btn clicCard">Adiquirir</a>
          </div>

          <div className="boxCard">
            <img src={Recentes4} alt="" />
            <h4>Macbook Apple</h4>
            <div className="precoCard">R$9,400,00 <span>10,000,00</span></div>
            <a href="#" className="btn clicCard">Adiquirir</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cards;