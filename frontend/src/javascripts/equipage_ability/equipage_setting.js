import React from 'react'
import PropTypes from 'prop-types'

import Title from './../common/title'
import Equipage from './equipage'

export default class EquipageSetting extends React.Component {
  constructor(props) {
    super(props)
    this.handleSelectEquipage = this.handleSelectEquipage.bind(this)
    this.getEquipageAbilities = this.getEquipageAbilities.bind(this)
  }

  handleSelectEquipage(part, equipage) {
    this.getEquipageAbilities(part, equipage)
  }

  getEquipageAbilities(part, equipage) {
    fetch('api/equipages/' + equipage.id + '/equipage_abilities/' + equipage.min_grade)
      .then((res) => res.json())
      .then((res) => {
        this.props.handleSelectEquipages(part, equipage, res)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <div className='equipageSettingComponent'>
        <Title title='◆装備' />
        <div className='equipages'>
          <span>{'手'}</span>
          <Equipage onSelectEquipage={this.handleSelectEquipage} part='hand' />
          <span>{'頭'}</span>
          <Equipage onSelectEquipage={this.handleSelectEquipage} part='head' />
          <span>{'体'}</span>
          <Equipage onSelectEquipage={this.handleSelectEquipage} part='body' />
          <span>{'足'}</span>
          <Equipage onSelectEquipage={this.handleSelectEquipage} part='foot' />
          <span>{'アクセ'}</span>
          <Equipage onSelectEquipage={this.handleSelectEquipage} part='accessory' />
          <span>{'アクセ'}</span>
          <Equipage onSelectEquipage={this.handleSelectEquipage} part='accessory' />
        </div>
      </div>
    )
  }
}

EquipageSetting.propTypes = {
  handleSelectEquipages: PropTypes.func.isRequired
}
