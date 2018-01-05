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
    if (equipage) {
      this.getEquipageAbilities(part, equipage)
    } else {
      this.props.handleSelectEquipages(part, equipage, [])
    }
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
          <div className='equipage'>
            <Equipage onSelectEquipage={this.handleSelectEquipage} part='hand' />
          </div>
          <div className='equipage'>
            <Equipage onSelectEquipage={this.handleSelectEquipage} part='head' />
          </div>
          <div className='equipage'>
            <Equipage onSelectEquipage={this.handleSelectEquipage} part='body' />
          </div>
          <div className='equipage'>
            <Equipage onSelectEquipage={this.handleSelectEquipage} part='foot' />
          </div>
          <div className='equipage'>
            <Equipage onSelectEquipage={this.handleSelectEquipage} part='accessory' />
          </div>
          <div className='equipage'>
            <Equipage onSelectEquipage={this.handleSelectEquipage} part='accessory' />
          </div>
        </div>
      </div>
    )
  }
}

EquipageSetting.propTypes = {
  handleSelectEquipages: PropTypes.func.isRequired
}
