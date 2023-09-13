import { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import CharacterContainer from "./components/CharacterContainer";



function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {

    let randomPokemon = [];

    for (let i = 0; i < 3; i++) {
      randomPokemon.push(Math.floor(Math.random() * (150 - 0) + 0));
    }

    const path = "https://pokeapi.co/api/v2/pokemon/";

    const listUrl = randomPokemon
      .map(element => path + element)
      .map(element => fetch(element))

    const listUrlDone = await Promise.all(listUrl)
    const listUrlJson = listUrlDone.map(element => element.json())
    const arrayPokemons = await Promise.all(listUrlJson)

    const arrayInfoPokemon = arrayPokemons
      .map(element => bringStats(element))

    setCharacters(arrayInfoPokemon);

  };


  const bringStats = (element) => {

    const name = element.name;
    const image = element.sprites.front_default;
    const weight = element.weight;
    const height = element.height
    return {
      name: name,
      image: image,
      weight: weight,
      height: height
    }
  };





  return (
    <Container>
      <Header />
      {!characters ? (
        <Welcome reqApi={reqApi} />
      ) : (
        <CharacterContainer characters={characters} reqApi={reqApi} />
      )}
    </Container>
  );
}

export default App;
