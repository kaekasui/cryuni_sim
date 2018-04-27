import React from 'react'
import PropTypes from 'prop-types'

import ModalEquipageList from './modal/modal_equipages_list'
import GradeForm from './grade_form'
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
    this.handleSelectEquipageGrade = this.handleSelectEquipageGrade.bind(this)
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

  handleSelectEquipageGrade(gradeLevel) {
    this.setState({selectedEquipageGrade: gradeLevel})
    this.props.onSelectEquipage(this.props.part, this.state.selectedEquipage, gradeLevel)
  }

  onClickCloseButton() {
    this.setState({modalIsOpen: false})
  }

  render() {
    return (
      <div className='equipageComponent'>
        <div className='selectable-equipage' onClick={this.handleClickEquipageSettingImage}>
          {this.state.selectedEquipage ? (
            <div>
              <EquipageInformation equipage={this.state.selectedEquipage} />
            </div>
          ) : (
            <img className='blank-equipage' src={'assets/equipages/blank_' + this.props.part + '.png'} />
          )}
        </div>
        <div className='grades'>
          {this.state.selectedEquipage ? (
            <GradeForm grades={this.state.selectedEquipage.grades_with_abilities} onSelectGrade={this.handleSelectEquipageGrade} selectedGradeLevel={this.state.selectedEquipageGrade} />
          ) : (
            null
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
        <ModalEquipageList handleClickCloseButton={this.onClickCloseButton} modalIsOpen={this.state.modalIsOpen} onSelectEquipage={this.handleSelectEquipage} part={this.props.part} />
      </div>
    )
  }
}

Equipage.propTypes = {
  onSelectCard: PropTypes.func.isRequired,
  onSelectEquipage: PropTypes.func.isRequired,
  part: PropTypes.string.isRequired
}
