import React, { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    const mappedPokemon = pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)

    return(
      <div className="myPokedex">
        {mappedPokemon}
      </div>
    );
  }
}

export default Pokedex;
