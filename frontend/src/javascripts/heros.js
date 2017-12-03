import React from 'react'

import Hero from './hero.js'

export default class Heros extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heros: []
    }
  }

  componentWillMount() {
    this.getHeros()
  }

  getHeros() {
    fetch('api/heros')
      .then((res) => res.json())
      .then((res) => {
        this.setState({heros: res})
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <div className="HerosComponent">
        {this.state.heros.map((hero) =>
          <Hero hero={hero} key={hero.id} />
        )}
      </div>
    )
  }
}
