import React from 'react'
import PropTypes from 'prop-types'

import Hero from './hero'
import HeroAbilities from './hero_abilities'
import IntimacyForm from './intimacy_form'
import Title from './../common/title'

export default class HeroAbilitySetting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heros: [],
      heroAbilities: [],
      intimacy: null
    }
    this.loadHeroAbilities = this.loadHeroAbilities.bind(this)
    this.selectHero = this.selectHero.bind(this)
    this.setIntimacy = this.setIntimacy.bind(this)
  }

  componentWillMount() {
    this.getHeros()
  }

  selectHero(hero) {
    this.props.selectHero(hero)
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

  setIntimacy(level) {
    this.setState({intimacy: level})
  }

  render() {
    return (
      <div className='heroAbilitySettingComponent'>
        <Title title='◆ヒーローアビリティ' />
        <ul>
          {this.state.heros.map((hero) =>
            (<li className='icon' key={hero.id}>
              <Hero handleLoadHeroAbilities={this.loadHeroAbilities} hero={hero} selectHero={this.selectHero} />
            </li>)
          )}
        </ul>
        <div className='clear' />
        <div className='hero-intimacy-ability'>
          <div className='col-md-5'>
            <IntimacyForm handleSetIntimacy={this.setIntimacy} />
          </div>
          <div className='col-md-7'>
            <HeroAbilities heroAbilities={this.state.heroAbilities} intimacy={this.state.intimacy} />
          </div>
        </div>
      </div>
    )
  }
}

HeroAbilitySetting.propTypes = {
  selectHero: PropTypes.func.isRequired
}
