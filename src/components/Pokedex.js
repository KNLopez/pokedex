import React, { Component } from 'react'
import PokemonList from './PokemonList'
import PokemonViewer from './PokemonViewer'
import PokedexControls from './PokedexControls'

export default class Pokedex extends Component {
  state = {
    filter: {
      searchText: '',
      classFilter: ''
    },
    isLoaded: false,
    chosenPokemon: '1'
  }

  setFilter = (text) => {
    this.setState({
      filter: {
        ...this.state.filter, searchText: text
      }
    })
  }

  choosePokemon = (e) => {
    if(e.target.value !== ''){
      this.setState({
        chosenPokemon: e.target.value
      })
    }
    console.log(this.state.chosenPokemon)
  }

  render() {
    return (
      <div className="pokedex">
        <input onChange={(e) => this.choosePokemon(e)}/>
        <PokemonList
          pokemon={this.state.pokemon}
          filter={this.state.filter}/>
        <PokemonViewer
          pokeId={this.state.chosenPokemon}/>
        <PokedexControls filter={(text)=>this.setFilter(text)}/>
      </div>
    )
  }
}
