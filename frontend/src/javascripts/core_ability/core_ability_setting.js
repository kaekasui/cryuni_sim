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
    this.setCoreAbilitiesToState = this.setCoreAbilitiesToState.bind(this)
  }

  componentWillMount() {
    this.getHeros()
  }

  togglePadlock(heroId) {
    for (let index in this.state.heros) {
      if (this.state.heros[index].id == heroId) {
        let heros = this.state.heros
        if (heros[index].locked == true) {
          heros[index].padlocked = !this.state.heros[index].padlocked
          console.log(this.state.heros[index].padlocked)
          if (this.state.heros[index].padlocked == true) {
            heros[index].attached_core_abilities = []
          } else {
            this.getCoreAbilities(heroId)
          }
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

  setCoreAbilitiesToState(heroId, res) {
    for (let index in this.state.heros) {
      if (this.state.heros[index].id == heroId) {
        let heros = this.state.heros
        heros[index].attached_core_abilities = res
        this.setState({heros: heros})
      }
    }
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

  getCoreAbilities(heroId) {
    fetch('api/heros/' + heroId + '/core_abilities')
      .then((res) => res.json())
      .then((res) => {
        this.setCoreAbilitiesToState(heroId, res)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <div className='coreAbilitySettingComponent'>
        <Title title='◆コアアビリティ' />
        <CheckMessage checked message='コアアビリティ開放済みの英雄を選択してください' />
        <ul>
          {this.state.heros.map((hero) =>
            (<li className='icon' key={hero.id}>
              <CoreHero handleClickCoreHeroImage={this.togglePadlock} hero={hero} />
            </li>)
          )}
        </ul>
        <div className='clear' />
      </div>
    )
  }
}
