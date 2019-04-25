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
      .then( (pokemon) =>{
        this.setState({
          pokemon: [].concat(...pokemon.results),
          isLoaded: true
        })
      }
      ).catch(error => {
       console.log(error)
    })
  }

  render ()  {

    const pokeList = this.state.pokemon.map((pokemon,i) => (
      <PokemonCell key={pokemon.name} name={pokemon.name} id={i + 1} url={pokemon.url}/>
    ));

    return (
      <div className="pokemon-list">
        <div className="pokemon-list__container">
          { this.state.isLoaded? pokeList : <div className="Loading">Loading</div>}
        </div>
      </div>
    );
  }
}

