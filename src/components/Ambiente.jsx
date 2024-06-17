import '../css/Ambiente.css'
import img1 from '../assets/images/01.jpg';
import img2 from '../assets/images/02.jpg';
import img3 from '../assets/images/03.jpg';
import img4 from '../assets/images/04.jpg';
import img5 from '../assets/images/05.jpg';
import img6 from '../assets/images/06.jpg';

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



    