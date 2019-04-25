import React, { Component } from 'react'

export default class PokemonControls extends Component {
  state = {
    translation: 0
  }

  translate = (val) => {
    console.log('translating ' + (this.state.translation + val))
    if(this.state.translation + val <= 0 && this.state.translation + val >= -7128){
      this.setState({
        translation: this.state.translation + val
      }, ()=> {
        this.props.setTranslate(this.state.translation)
      })
    }
  }

  render() {
    return (
      <div className="pokedex-controls">
        <div onClick={(up)=>this.translate(396)} className="triangle up"></div>
        <div onClick={(up)=>this.translate(-396)}className="triangle down"></div>
      </div>
    )
  }
}
