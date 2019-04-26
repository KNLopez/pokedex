import React, { Component } from 'react'

export default class PokemonEvolutionDetail extends Component {

  state = {
    pokemon: {},
    isLoaded: false
  }

  componentDidMount = async() =>{
    try{
      let res = await fetch('https://pokeapi.co/api/v2/pokemon/' + this.props.name)
      let pokemonInfo = await res.json()
      this.setState({ pokemon:pokemonInfo , isLoaded: true })
    } catch(error){
      this.setState({error})
    }
  }


  render() {
    return (
      <div className="evolution">
        {this.state.isLoaded ?
        <div className="evolution-info">
          <img alt={this.state.pokemon.name} src={this.state.pokemon.sprites.front_default} />
          <p>{this.state.pokemon.name}</p>
        </div>: ''}
      </div>
    )
  }
}
