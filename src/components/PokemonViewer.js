import React, { Component } from 'react'
import PokemonViewerStats from './PokemonViewerStats'
import { ReactComponent as Pokeball }  from '../pokeball.svg'
import PokemonEvolution from './PokemonEvolution'
// import Loader from './Loader'

export default class PokemonViewer extends Component {

  state = {
    pokemon: {},
    isLoaded: false,
  }

  componentDidUpdate(prevProps,prevState){
    if (prevState.pokemon === this.state.pokemon && this.state.isLoaded) {
      console.log('component update conditional to prevent infinite loop')
      console.log('--------------------')

      this._loadPokemonData()

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
    // console.log('mounted')
    this._loadPokemonData()
  }

  _loadPokemonData = async() => {
    this.setState({  isLoaded: false })
    try {
      let res = await fetch('https://pokeapi.co/api/v2/pokemon/' + this.props.pokeId )
      let pokemonInfo = await res.json()
      let species = await fetch(pokemonInfo.species.url)
      let speciesInfo = await species.json()
      let evolution = await fetch(speciesInfo.evolution_chain.url)
      let evolutionInfo = await evolution.json()
      let evolutionChain = []
      let evoChain = evolutionInfo.chain

      do {
        evolutionChain.push({
          "species_name": evoChain.species.name,
        });
        evoChain = evoChain['evolves_to'][0]
      } while (evoChain && evoChain.hasOwnProperty('evolves_to'))

      pokemonInfo.evolution = evolutionChain;

      this.setState({ pokemon : pokemonInfo, isLoaded: true })
      
    } catch(error) {
      console.log(error)
    }
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
            <div className="pokemon-detail-top">
              <div className="pokemon-detail-top__info">
                <h3>{this.state.pokemon.name}</h3>
                <img
                  alt={this.state.pokemon.name}
                  src={this.state.pokemon.sprites.front_default} />
              </div>
              <PokemonEvolution evolution={this.state.pokemon.evolution}/>
            </div>
            <div className="type-container">
              {typeSpan}
            </div>
            {statBars}
          </div>
          : <div className="pokebal-loader"><Pokeball /></div>}
      </div>
    )
  }
}
