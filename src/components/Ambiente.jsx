import '../css/Ambiente.css'
import img1 from '../assets/img/01.jpg';
import img2 from '../assets/img/02.jpg';
import img3 from '../assets/img/03.jpg';
import img4 from '../assets/img/04.jpg';
import img5 from '../assets/img/05.jpg';
import img6 from '../assets/img/06.jpg';

function Ambiente(){
    return(

        <section className="ambiente" id="ambiente">
        <div className="box-container">
            <div className="box">
                <div className="image">
                    <img src={img1} alt="" />
                </div>
            </div>

            <div className="box">
                <div className="image">
                    <img src={img2} alt="" />
                </div>
            </div>

            <div className="box">
                <div className="image">
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>

        <div className="box-container">
            <div className="box">
                <div className="image">
                    <img src={img4} alt="" />
                </div>
            </div>

            <div className="box">
                <div className="image">
                    <img src={img5} alt="" />
                </div>
            </div>

            <div className="box">
                <div className="image">
                    <img src={img6} alt="" />
                </div>
            </div>
        </div>
    </section>

    )
}

export default Ambiente



    