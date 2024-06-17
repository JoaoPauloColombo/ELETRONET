import React from 'react';
import PropTypes from 'prop-types';
import '../css/ImageText.css'; // Importa o arquivo de estilos para o componente

function ImageText({ images }) {
  return (
    <div className="container">
      {/* Mapeia o array de imagens e renderiza um div para cada imagem */}
      {images.map((image, index) => (
        <div key={index} className="image-container">
          {/* Imagem */}
          <img src={image.src} alt={image.alt} />
          {/* Texto associado à imagem */}
          <p className="text">{image.text}</p>
          {/* Preço associado à imagem */}
          <p className="text">R${image.preco},00</p>
          {/* Botão "Saiba Mais" (ainda não funcional neste exemplo) */}
          <button className="button">Saiba Mais</button>
        </div>
      ))}
    </div>
  );
}

// Definição das propTypes para validar as props recebidas
ImageText.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired, // src da imagem é uma string obrigatória
      alt: PropTypes.string.isRequired, // alt da imagem é uma string obrigatória
      text: PropTypes.string.isRequired, // texto associado é uma string obrigatória
      preco: PropTypes.number.isRequired // preço é um número obrigatório
    })
  ).isRequired, // o array de imagens é obrigatório
};

export default ImageText;
