import styled from "styled-components";

export default function Character(props) {

  const { dataCharacter } = props;

  const { name, url, image, weight, height } = dataCharacter;


  return (

    <ContentCharacter >
      <Title >{name}</Title>
      <PokemonImage src={image} alt="pokemon_image"></PokemonImage>
      <StatsText>
        <p>Peso: {weight}</p>
        <p>Estatura: {height}</p>
      </StatsText>
    </ContentCharacter>

  );
}




const ContentCharacter = styled.div`
  padding: 15px;
  border: 1px solid #1d6e64;
  border-radius: 20px;
  width: 250px;
  text-align: center;
  margin: 10px;

  &:hover{
    filter: brightness(50%);
  }

`;

const Title = styled.h2`
  color:#264653;
  padding: 0 ;
  margin:0;
  height:50px;
  justify-content: center;
  display:flex;

`;

const PokemonImage = styled.img`
  padding:0;
  height:120px;
`;

const StatsText = styled.h4`
  color:#1d6e64;
  height:100px
`;


