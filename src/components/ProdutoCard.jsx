import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const MainTitle = styled.h1`
  text-align: center;
  margin: 40px 0;
  color: white;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

const ImageCard = styled.div`
  width: calc(23.333% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 5px solid #089cc9;
  border-radius: 10%;
  background-color:white;
`;

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10%;
  object-fit: cover;
  margin-bottom: 10px;
  margin-top:10px;
`;

const SubTitle = styled.h2`
  color: #089cc9;
  text-align: center;
  margin: 0 0 5px 0;
`;
const Number = styled.h2`
  color: #089cc9;
  text-align: center;
  margin: 0 0 5px 0;
  font-size:20px;
`;

const Button = styled.button`
  width: 50%;
  height:20%
  padding: 10px 20px;
  border: none;
  margin-bottom:10px;
  border-radius: 5px;
  background: #089cc9;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #394c73;
  }
`;

function ProdutosCard({ characters }) {
  const navigate = useNavigate();

  const handleLearnMore = (id) => {
    navigate(`/bio/${id}`);
  };

  return (
    <div>
      <MainTitle>Produtos</MainTitle>
      <Container>
        {characters.map((character) => (
          <ImageCard key={character.id}>
            <StyledImage
              src={`http://localhost:5000/uploads/${character.foto}`}
              alt={character.nome}
            />
            <SubTitle>{character.nome}</SubTitle>
            <Number>R${character.preco},00</Number>
            
            <Button onClick={() => handleLearnMore(character.id)}>Saiba Mais</Button>
          </ImageCard>
        ))}
      </Container>
    </div>
  );
}

ProdutosCard.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nome: PropTypes.string.isRequired,
      foto: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProdutosCard;