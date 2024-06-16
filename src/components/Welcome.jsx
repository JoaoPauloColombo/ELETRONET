import '../css/Welcome.css'
import img1 from '../assets/images/welcome.png';

function Welcome() {
  return (
    <div className="container">
      <div className="boxs1">
        <div id="box1" className="box1"> 
          <h1 id="title">
            Bem vindo
          </h1>
          <p className="paragrafo">
            Bem-vindo à Eletronet, a sua parceira em tecnologia! Nossa plataforma inovadora simplifica o
            cadastro de produtos, tornando seus processos mais ágeis e eficientes. Junte-se a nós e descubra
            como podemos transformar o seu negócio.
          </p>
        </div>
        <div className="box1"> 
          <img src={img1} alt="" />
        </div>
      </div>

      <div className="boxs2"> 
        <div id="criacao" className="box3"> 
          <h1 id="title">
            Criação
          </h1>
          <p className="paragrafo2"> 
            Em sala de aula, criamos a Eletronet, uma plataforma tecnológica inovadora destinada a empresas para
            facilitar o cadastro e a gestão de produtos. Este projeto visa otimizar processos empresariais,
            proporcionando uma interface intuitiva e funcional, resultando em maior eficiência e organização.
          </p>
        </div>

        <div id="servico" className="box3"> 
          <h1 id="title">
            Serviço
          </h1>
          <p className="paragrafo2"> 
            A Eletronet oferece um serviço eficiente de cadastro de produtos, permitindo que as empresas
            organizem e gerenciem suas ofertas de forma simples e prática. Nossa plataforma intuitiva facilita a
            inserção de dados, garantindo precisão e agilidade no processo, o que resulta em uma gestão de
            produtos mais eficaz e produtiva.
          </p>
        </div>

        <div id="otimizacao" className="box3"> 
          <h1 id="title">
            Otimização
          </h1>
          <p className="paragrafo2"> 
            Nos destacamos na otimização de processos empresariais, proporcionando soluções que aumentam a
            eficiência e reduzem o tempo gasto em tarefas administrativas. Com nossa plataforma, o cadastro de
            produtos é simplificado, permitindo uma gestão mais rápida e precisa.
          </p>
        </div>
      </div>

      <div className="boxs1"> 
        <div className="box1"> 
          <img src={img1} alt="" />
        </div>
        <div id="funcionamento" className="box1"> 
          <h1 id="title">
            Como funciona
          </h1>
          <p className="paragrafo"> 
            O funcionamento do cadastro de produtos é simples e intuitivo. Os
            usuários acessam um painel de controle onde podem adicionar, editar e organizar informações dos
            produtos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;