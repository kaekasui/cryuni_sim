import React from 'react'

import Title from './../common/title'
import Equipage from './equipage'

export default class EquipageSetting extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='equipageSettingComponent'>
        <Title title='◆装備' />
        <div className='equipages'>
          <Equipage part='hand' />
          <Equipage part='head' />
          <Equipage part='body' />
          <Equipage part='foot' />
          <Equipage part='accessory' />
          <Equipage part='accessory' />
        </div>
      </div>
    )
  }
}
