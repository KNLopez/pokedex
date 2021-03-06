import React, { Component } from 'react'
import PokemonCell from './PokemonCell'

export default class PokemonList extends Component {

  state = {
    pokemon: [],
    isLoaded: false
  }

  componentDidMount () {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then( pokemon => pokemon.json())
      .then(
        pokemon => this.setState({ pokemon: [].concat(...pokemon.results),isLoaded: true }),
        error => console.log(error)
      )
  }


  render ()  {

    const pokeList = this.state.pokemon.map((pokemon,i) => (
      <PokemonCell
        choosePokemon={(val)=>this.props.choosePokemon(val)} 
        key={pokemon.name}
        name={pokemon.name}
        id={i + 1}
        url={pokemon.url}/>
    ));

    return (
      <div className="pokemon-list">
        <div
          style={{transform: `translateY(${this.props.translate}px)`}}
          className="pokemon-list__container">
          { this.state.isLoaded ? pokeList : <div className="container-center"><div className="lds-ripple"><div></div><div></div></div></div>}
        </div>
      </div>
    );
  }
}

