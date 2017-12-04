import React from 'react'

import Hero from './hero'
import HeroAbilities from './hero_abilities'

export default class HeroAbilitySetting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heros: [],
      heroAbilities: []
    }
    this.loadHeroAbilities = this.loadHeroAbilities.bind(this)
  }

  componentWillMount() {
    this.getHeros()
  }

  loadHeroAbilities(heroAbilities) {
    this.setState({heroAbilities: heroAbilities})
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
      <div className='heroAbilitySettingComponent'>
        <ul>
          {this.state.heros.map((hero) =>
            (<li key={hero.id}>
              <Hero handleLoad={this.loadHeroAbilities} hero={hero} />
            </li>)
          )}
        </ul>
        <HeroAbilities heroAbilities={this.state.heroAbilities} />
      </div>
    )
  }
}
