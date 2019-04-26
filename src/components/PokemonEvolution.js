import React, { Component } from 'react'
import PokemonEvolutionDetail from './PokemonEvolutionDetail'

export default class PokemonEvolution extends Component {

  render() {
    const details = this.props.evolution.map(evo => (
      <PokemonEvolutionDetail key={evo.species_name} name={evo.species_name} />
    ))
    return (
      <div className="pokemon-evolution-container">
        {details}
      </div>
    )
  }
}
