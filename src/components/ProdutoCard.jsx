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
  width: calc(33.333% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #136D58;
  object-fit: cover;
  margin-bottom: 10px;
`;

const SubTitle = styled.h2`
  color: #fff;
  text-align: center;
  margin: 0 0 5px 0;
`;

const Button = styled.button`
  width: 50%;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: #136D58;
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