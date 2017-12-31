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
          <Equipage part='head' />
        </div>
      </div>
    )
  }
}
