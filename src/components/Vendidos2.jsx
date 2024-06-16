import React from "react";
import Slider from "react-slick";
import Box1 from '../assets/images/relogio.png';
import '../css/Vendidos.css'

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
      <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="product-card">
            <div className="product-image">
              <img src={Box1} className="product-thumb" alt="" />
            </div>
            <div className="product-info">
              <p className="product-brand">All Laptop, Asus, Laptop</p>
              <p className="product-short-description">Asus ROG Flow Z13</p>
              <p className="paragraph-two">GZ301ZE 13.4 Inch</p>
              <div className="preco"><span className="price">R$8.500,00</span></div>
            </div>
          </div>
        </div>
        <div>
          <div className="product-card">
            <div className="product-image">
              <img src={Box1} className="product-thumb" alt="" />
            </div>
            <div className="product-info">
              <p className="product-brand" id="apple">Apple, Laptop</p>
              <p className="product-short-description">Apple Macbook Pro M2</p>
              <p className="paragraph-two">(MNEH3) 13.3 Inch</p>
              <div className="preco"><span className="price">R$12.000,00</span></div>
            </div>
          </div>
        </div>
        <div>
          <div className="product-card">
            <div className="product-image">
              <img src={Box1} className="product-thumb" alt="" />
            </div>
            <div className="product-info">
              <p className="product-brand">Acer, Laptop</p>
              <p className="product-short-description">ACER NITRO 5 AN515-</p>
              <p className="paragraph-two">58-79MU 15.6 INCH</p>
              <div className="preco"><span className="price">R$3.100,00</span></div>
            </div>
          </div>
        </div>
        <div>
          <div className="product-card">
            <div className="product-image">
              <img src={Box1} className="product-thumb" alt="" />
            </div>
            <div className="product-info">
              <p className="product-brand">All Laptop, Acer, Laptop</p>
              <p className="product-short-description">Acer Nitro 7-</p>
              <p className="paragraph-two"> AN715, i5-10300H </p>
              <div className="preco"><span className="price">R$6.500,00</span></div>
            </div>
          </div>
        </div>
        <div>
          <div className="product-card">
            <div className="product-image">
              <img src={Box1} className="product-thumb" alt="" />
            </div>
            <div className="product-info">
              <p className="product-brand">Computer & Accessories</p>
              <p className="product-short-description">Benq Zowie FK1</p>
              <p className="paragraph-two">Gaming Mouse</p>
              <div className="preco"><span className="price">R$670,00</span></div>
            </div>
          </div>
        </div>
        <div>
          <div className="product-card">
            <div className="product-image">
              <img src={Box1} className="product-thumb" alt="" />
            </div>
            <div className="product-info">
              <p className="product-brand">CC Camera Accessories</p>
              <p className="product-short-description">HiFuture FutureFit Zone</p>
              <p className="paragraph-two">Waterproof</p>
              <div className="preco"><span className="price">R$3.100,00</span></div>
            </div>
          </div>
        </div>
      </Slider>
    </div>

  );
}

export default MultipleItems;
