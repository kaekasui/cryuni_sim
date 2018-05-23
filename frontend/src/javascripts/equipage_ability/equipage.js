import React from 'react'
import PropTypes from 'prop-types'

import ModalEquipagesList from './modal/modal_equipages_list'
import Card from './card'
import EquipageInformation from './equipage_information'

export default class Equipage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      equipages: [],
      selectedEquipage: null,
      selectedEquipageGrade: 0
    }
    this.handleClickEquipageSettingImage = this.handleClickEquipageSettingImage.bind(this)
    this.handleSelectCard = this.handleSelectCard.bind(this)
    this.handleSelectEquipage = this.handleSelectEquipage.bind(this)
    this.onSelectEquipageGrade = this.onSelectEquipageGrade.bind(this)
    this.onClickCloseButton = this.onClickCloseButton.bind(this)
  }

  handleClickEquipageSettingImage() {
    this.setState({modalIsOpen: true})
  }

  handleSelectEquipage(equipage) {
    this.setState({modalIsOpen: false, selectedEquipage: equipage, selectedEquipageGrade: (equipage || {}).min_grade})
    this.props.onSelectEquipage(this.props.part, equipage, (equipage || {}).min_grade)
  }

  handleSelectCard(i, abilities) {
    this.props.onSelectCard(this.props.part, i, abilities)
  }

  onSelectEquipageGrade(gradeWithAbilities) {
    console.log(gradeWithAbilities)
  }

  onClickCloseButton() {
    this.setState({modalIsOpen: false})
  }

  render() {
    return (
      <div className='equipageComponent'>
        <span onClick={this.handleClickEquipageSettingImage}>
          <button>{'装備変更'}</button>
        </span>
        <div className='selectable-equipage'>
          {this.state.selectedEquipage ? (
            <div>
              <EquipageInformation equipage={this.state.selectedEquipage} handleSelectGrade={this.onSelectEquipageGrade} />
            </div>
          ) : (
            <img className='blank-equipage' src={'assets/equipages/blank_' + this.props.part + '.png'} />
          )}
        </div>
        <div className='cards'>
          {this.state.false ? (
            <div>
              {Array.from(Array(this.state.selectedEquipage.card_slot).keys()).map((i) => (
                <Card index={i} key={i} onSelectCard={this.handleSelectCard} />
              ))}
            </div>
          ) : (
            null
          )}
        </div>
        <ModalEquipagesList handleClickCloseButton={this.onClickCloseButton} modalIsOpen={this.state.modalIsOpen} onSelectEquipage={this.handleSelectEquipage} part={this.props.part} />
      </div>
    )
  }
}

Equipage.propTypes = {
  onSelectCard: PropTypes.func.isRequired,
  onSelectEquipage: PropTypes.func.isRequired,
  part: PropTypes.string.isRequired
}
