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
          <span>{'手'}</span>
          <Equipage part='hand' />
          <span>{'頭'}</span>
          <Equipage part='head' />
          <span>{'体'}</span>
          <Equipage part='body' />
          <span>{'足'}</span>
          <Equipage part='foot' />
          <span>{'アクセ'}</span>
          <Equipage part='accessory' />
          <span>{'アクセ'}</span>
          <Equipage part='accessory' />
        </div>
      </div>
    )
  }
}
