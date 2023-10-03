import {Header, Button, Grid, Image} from "semantic-ui-react";
import  Container  from "../Container/Container";
import pokemonBanner from "../../images/pokemon-img3.png";

import './BestCharacters.scss';

export default function BestCharacters() {

  return(
    <Container>
    <div className="best-characters">
      <Grid columns={2} divided="vertically">
        <Grid.Column>
          <Header as="h1">
            Los pokemones mas shorimpios del milenio, sanchipapa, melocoton.
          </Header>
          <Header as="h3">
            Disfruta del mejor contenido pokemon
          </Header>
          <Button>Ver todos los pokemon</Button>
        </Grid.Column>
        <Grid.Column className="image-container">
          <Image src={pokemonBanner} alt="pokemon-app"/>
        </Grid.Column>
      </Grid>
    </div>
    </Container>
  )
}