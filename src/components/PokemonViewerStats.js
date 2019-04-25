import React, { Component } from 'react'

export default class PokemonViewerStats extends Component {
  render() {
    return (
      <div className="bar-container">
        <p>{this.props.stat.stat.name}</p>
        <div className="bar">
          <div className={`${this.props.stat.stat.name} attribute` } style={{width: this.props.stat.base_stat + '%'}}></div> 
        </div>
      </div>
    )
  }
}
