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
      <div className='coreAbilitySettingComponent'>
        <Title title='◆コアアビリティ' />
        <CheckMessage checked={false} message='コアアビリティ開放済みの英雄を選択してください' />
        <ul>
          {this.state.heros.map((hero) =>
            (<li className='icon' key={hero.id}>
              <CoreHero hero={hero} />
            </li>)
          )}
        </ul>
        <div className='clear' />
      </div>
    )
  }
}
