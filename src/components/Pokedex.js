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

  choosePokemon = (val) => {
    console.log(val)
      this.setState({
        chosenPokemon: val
      })
  }

  render() {
    return (
      <div className="pokedex">
        <PokemonList
          pokemon={this.state.pokemon}
          filter={this.state.filter}
          choosePokemon={(val) => this.choosePokemon(val)}/>
        <PokemonViewer
          pokeId={this.state.chosenPokemon}
          />
        <PokedexControls filter={(text)=>this.setFilter(text)}/>
      </div>
    )
  }
}
