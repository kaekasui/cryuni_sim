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

  handleSelectEquipage(part, equipage, gradeLevel) {
    if (equipage) {
      this.getEquipageAbilities(part, equipage, gradeLevel)
    } else {
      this.props.handleSelectEquipages(part, equipage, [])
    }
  }

  getEquipageAbilities(part, equipage, gradeLevel) {
    fetch('api/equipages/' + equipage.id + '/equipage_abilities/' + gradeLevel)
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
          <div className='equipage equipage-hand'>
            <Equipage onSelectEquipage={this.handleSelectEquipage} part='hand' />
          </div>
          <div className='equipage equipage-head'>
            <Equipage onSelectEquipage={this.handleSelectEquipage} part='head' />
          </div>
          <div className='equipage equipage-body'>
            <Equipage onSelectEquipage={this.handleSelectEquipage} part='body' />
          </div>
          <div className='equipage equipage-foot'>
            <Equipage onSelectEquipage={this.handleSelectEquipage} part='foot' />
          </div>
          <div className='equipage equipage-accessory1'>
            <Equipage onSelectEquipage={this.handleSelectEquipage} part='accessory1' />
          </div>
          <div className='equipage equipage-accessory2'>
            <Equipage onSelectEquipage={this.handleSelectEquipage} part='accessory2' />
          </div>
        </div>
      </div>
    )
  }
}

EquipageSetting.propTypes = {
  handleSelectEquipages: PropTypes.func.isRequired
}
