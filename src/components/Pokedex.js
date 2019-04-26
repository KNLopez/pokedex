import React, { Component } from 'react'
import PokemonList from './PokemonList'
import PokemonViewer from './PokemonViewer'
import PokedexControls from './PokedexControls'
import Pokeheader from './Pokeheader'

export default class Pokedex extends Component {
  state = {
    isLoaded: false,
    translate: 0,
    chosenPokemon: 1
  }

  choosePokemon = (val) => {
    this.setState({
      chosenPokemon: val
    })
  }

  setTranslate = (translate) => {
    console.log('pokedex' + translate)
     this.setState({
      translate: translate
    })
  }

  render() {
    return (
      <div className="pokedex">
        <Pokeheader />
        <PokemonList
          pokemon={this.state.pokemon}
          choosePokemon={(val) => this.choosePokemon(val)}
          translate={this.state.translate}/>
        <PokemonViewer
          pokeId={this.state.chosenPokemon}
          />
        <PokedexControls setTranslate={(translate)=> this.setTranslate(translate)}/>
      </div>
    )
  }
}
