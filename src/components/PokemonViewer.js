import React, { Component } from 'react'

export default class PokemonViewer extends Component {
  state = {
    pokemon: {},
    isLoaded: false
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.pokemon === this.state.pokemon) {
      fetch('https://pokeapi.co/api/v2/pokemon/' + this.props.pokeId)
      .then( pokemon => pokemon.json())
      .then( (pokemon) =>{
        this.setState({
          pokemon: pokemon,
          isLoaded: true
        })
        console.log(this.state.pokemon)
      }
      ).catch(error => {
        console.log(error)
      })
    }
  }


  render() {
    return (
      <div>
        { this.state.isLoaded ? this.state.pokemon.name : 'not-loaded'}
      </div>
    )
  }
}
