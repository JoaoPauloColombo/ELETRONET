import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5em;
    margin-top: 1.2em;
    padding-bottom: 1.4em;
`;

const ImageContainer = styled.div`
    width: 200px;
    height: 300px;
    margin: 0 10px;
    img{
        width:100%;
        height:100%;
        border-radius: 5px;
        object-fit: cover;
    }
`;

const Text = styled.p`
    text-align: center;
    margin: 10px 0;
`;

const Button = styled.button`
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #004B9C;  
    }
`;

function ImageText({ images }) {
    return (
        <Container>
            {images.map((image, index) => (
                <ImageContainer key={index}>
                    <img src={image.src} alt={image.alt} />
                    <Text>{image.text}</Text>
                    <Text>{image.preco}</Text>
                    <Button>Saiba Mais</Button>
                </ImageContainer>
            ))}
        </Container>
    );
}

ImageText.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ImageText;