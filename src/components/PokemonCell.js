import React, { Component } from 'react'

export default class Pokemon extends Component {
  render() {
    return (
      <div className="pokemon">
        <img alt={this.props.name} onClick={()=> {this.props.choosePokemon(this.props.id)}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} />
      </div>
    )
  }
}
