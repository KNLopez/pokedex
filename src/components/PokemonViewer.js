import React, { Component } from 'react'

export default class PokemonViewer extends Component {
  state = {
    pokemon: {},
    isLoaded: false,
  }

  componentDidUpdate(prevProps,prevState){
    if (prevState.pokemon === this.state.pokemon) {
      console.log('component update if equal to prevent infinite loop')
      fetch('https://pokeapi.co/api/v2/pokemon/' + this.props.pokeId)
      .then( pokemon => pokemon.json())
      .then(
        pokemon => this.setState({ pokemon: pokemon, isLoaded: true }),
        error => console.log(error)
      )
    } else {
      console.log('no calls made')
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps.pokeId , this.state.pokemon.id)
    if (nextProps.pokeId === this.state.pokemon.id) {
      console.log('Should component false')
      return false
    }
    console.log('Should component true')
    return true
  }

  componentDidMount(){
    console.log('mounted')
    this.setState({
      pokeId: this.props.pokeId
    })
  }


  render() {
    return (
      <div>
        { this.state.isLoaded ? this.state.pokemon.name : 'not-loaded'}
      </div>
    )
  }
}
