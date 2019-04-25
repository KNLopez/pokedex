import React, { Component } from 'react'
import PokemonViewerStats from './PokemonViewerStats'
export default class PokemonViewer extends Component {

  state = {
    pokemon: {},
    isLoaded: false,
  }

  componentDidUpdate(prevProps,prevState){
    if (prevState.pokemon === this.state.pokemon) {
      console.log('component update conditional to prevent infinite loop')
      console.log('--------------------')
      fetch('https://pokeapi.co/api/v2/pokemon/' + this.props.pokeId)
      .then( pokemon => pokemon.json())
      .then(
        pokemon => {this.setState({ pokemon: pokemon, isLoaded: true })},
        error => console.log(error)
      )
    } else {
      console.log('no calls made')
      console.log('--------------------')
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps.pokeId === this.state.pokemon.id) {
      console.log('Should component false')
      return false
    }
    console.log('Should component true')
    return true
  }

  componentDidMount(){
    console.log('mounted')
  }


  render() {
    let statBars, typeSpan
    if(this.state.isLoaded){
      statBars = this.state.pokemon.stats.map((stat,i) => (
        <PokemonViewerStats key={i} stat={stat}/>
      ))
      typeSpan = this.state.pokemon.types.map((type,i) => (
        <span key={i} className={type.type.name}>{type.type.name}</span>
      ))
    }

    return (
      <div className="pokemon-viewer">
        { this.state.isLoaded ?
          <div className="pokemon-details-container">
            <img
              alt={this.state.pokemon.name}
              src= {this.state.pokemon.sprites.front_default} />
            <h3>{this.state.pokemon.name}</h3>
            <div className="type-container">
              {typeSpan}
            </div>
            {statBars}
          </div>
          : 'Choose a Pokemon'}
      </div>
    )
  }
}
