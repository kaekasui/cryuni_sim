import React from 'react'
import { render } from 'react-dom'

import Hero from './hero.js'

export default class Heros extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heros: []
    }
  }

  getHeros() {
    fetch('api/heros')
      .then((res) => res.json())
      .then((res) => {
        this.setState({heros: res})
        console.log(res)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  componentWillMount() {
    this.getHeros()
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
