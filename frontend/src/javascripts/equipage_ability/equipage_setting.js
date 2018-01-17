import React from 'react'
import PropTypes from 'prop-types'

import Title from './../common/title'
import Equipage from './equipage'

export default class EquipageSetting extends React.Component {
  constructor(props) {
    super(props)
    this.handleSelectEquipage = this.handleSelectEquipage.bind(this)
    this.handleSelectCard = this.handleSelectCard.bind(this)
    this.getEquipageAbilities = this.getEquipageAbilities.bind(this)
  }

  handleSelectEquipage(part, equipage, gradeLevel) {
    if (equipage) {
      this.getEquipageAbilities(part, equipage, gradeLevel)
    } else {
      this.props.handleSelectEquipages(part, equipage, [])
    }
  }

  handleSelectCard(part, index, abilities) {
    this.props.handleSelectCards(part, index, abilities)
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
            <Equipage onSelectCard={this.handleSelectCard} onSelectEquipage={this.handleSelectEquipage} part='hand' />
          </div>
          <div className='equipage equipage-head'>
            <Equipage onSelectCard={this.handleSelectCard} onSelectEquipage={this.handleSelectEquipage} part='head' />
          </div>
          <div className='equipage equipage-body'>
            <Equipage onSelectCard={this.handleSelectCard} onSelectEquipage={this.handleSelectEquipage} part='body' />
          </div>
          <div className='equipage equipage-foot'>
            <Equipage onSelectCard={this.handleSelectCard} onSelectEquipage={this.handleSelectEquipage} part='foot' />
          </div>
          <div className='equipage equipage-accessory1'>
            <Equipage onSelectCard={this.handleSelectCard} onSelectEquipage={this.handleSelectEquipage} part='accessory1' />
          </div>
          <div className='equipage equipage-accessory2'>
            <Equipage onSelectCard={this.handleSelectCard} onSelectEquipage={this.handleSelectEquipage} part='accessory2' />
          </div>
        </div>
      </div>
    )
  }
}

EquipageSetting.propTypes = {
  handleSelectCards: PropTypes.func.isRequired,
  handleSelectEquipages: PropTypes.func.isRequired
}
