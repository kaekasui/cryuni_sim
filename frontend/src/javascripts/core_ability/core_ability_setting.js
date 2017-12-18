import React from 'react'

import CoreHero from './core_hero'
import Title from './../common/title'
import CheckMessage from './../common/check_message'

export default class CoreAbilitySetting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heros: []
    }
    this.togglePadlock = this.togglePadlock.bind(this)
    this.setPadlockedToState = this.setPadlockedToState.bind(this)
  }

  componentWillMount() {
    this.getHeros()
  }

  togglePadlock(hero_id) {
    for (let index in this.state.heros) {
      if (this.state.heros[index].id == hero_id) {
        let heros = this.state.heros
        if (heros[index].locked == true) {
          heros[index].padlocked = !this.state.heros[index].padlocked
          this.setState({heros: heros})
        }
      }
    }
  }

  setPadlockedToState(res) {
    for (let index in res) {
      res[index].padlocked = res[index].locked
    }
    this.setState({heros: res})
  }

  getHeros() {
    fetch('api/heros')
      .then((res) => res.json())
      .then((res) => {
        this.setPadlockedToState(res)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <div className='coreAbilitySettingComponent'>
        <Title title='◆コアアビリティ' />
        <CheckMessage checked={false} message='コアアビリティ開放済みの英雄を選択してください' />
        <ul>
          {this.state.heros.map((hero) =>
            (<li className='icon' key={hero.id}>
              <CoreHero hero={hero} handleClickCoreHeroImage={this.togglePadlock} />
            </li>)
          )}
        </ul>
        <div className='clear' />
      </div>
    )
  }
}
