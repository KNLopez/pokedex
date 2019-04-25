import React, { Component } from 'react'

export default class Pokemon extends Component {
  render() {
    return (
      <div className="pokemon">
        <img alt={this.props.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} />
      </div>
    )
  }
}
