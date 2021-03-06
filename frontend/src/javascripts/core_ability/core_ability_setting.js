import React from 'react'
import PropTypes from 'prop-types'

import CoreHero from './core_hero'
import Title from './../common/title'
import CheckMessage from './../common/check_message'
import Loading from './../common/loading'

export default class CoreAbilitySetting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
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
          if (this.state.heros[index].padlocked == true) {
            this.props.handleRemoveCoreHero(heros[index])
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
      res[index].attached_core_abilities = []
    }
    this.setState({heros: res, isLoading: false})
  }

  setCoreAbilitiesToState(heroId, res) {
    for (let index in this.state.heros) {
      if (this.state.heros[index].id == heroId) {
        let heros = this.state.heros
        this.props.handleSetCoreHeros(heros[index], res)
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
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div>
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
        )}
      </div>
    )
  }
}

CoreAbilitySetting.propTypes = {
  handleSetCoreHeros: PropTypes.func.isRequired,
  handleRemoveCoreHero: PropTypes.func.isRequired
}
