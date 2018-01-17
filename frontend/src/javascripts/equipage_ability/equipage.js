import React from 'react'
import PropTypes from 'prop-types'

import ModalEquipageList from './modal/modal_equipages_list'
import GradeForm from './grade_form'
import Card from './card'

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
    this.getEquipages = this.getEquipages.bind(this)
  }

  handleClickEquipageSettingImage() {
    this.getEquipages()
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

  getEquipages() {
    fetch('api/equipages/' + this.props.part)
      .then((res) => res.json())
      .then((res) => {
        this.setState({equipages: res, modalIsOpen: true})
      })
      .catch((error) => {
        console.error(error)
      })
  }

  onClickCloseButton() {
    this.setState({modalIsOpen: false})
  }

  render() {
    return (
      <div className='equipageComponent'>
        <div className='selectable-equipage' onClick={this.handleClickEquipageSettingImage}>
          {this.state.selectedEquipage ? (
            <span>{this.state.selectedEquipage.name}</span>
          ) : (
            <img src={'assets/equipages/blank_' + this.props.part + '.png'} />
          )}
        </div>
        <div className='grades'>
          {this.state.selectedEquipage ? (
            <GradeForm grades={this.state.selectedEquipage.range_grades} onSelectGrade={this.handleSelectEquipageGrade} selectedGradeLevel={this.state.selectedEquipageGrade} />
          ) : (
            null
          )}
        </div>
        <div className='cards'>
          {this.state.selectedEquipage ? (
            <div>
              {Array.from(Array(this.state.selectedEquipage.card_slot).keys()).map((i) => (
                <Card index={i} key={i} onSelectCard={this.handleSelectCard} />
              ))}
            </div>
          ) : (
            null
          )}
        </div>
        <ModalEquipageList equipages={this.state.equipages} handleClickCloseButton={this.onClickCloseButton} modalIsOpen={this.state.modalIsOpen} onSelectEquipage={this.handleSelectEquipage} />
      </div>
    )
  }
}

Equipage.propTypes = {
  onSelectCard: PropTypes.func.isRequired,
  onSelectEquipage: PropTypes.func.isRequired,
  part: PropTypes.string.isRequired
}
