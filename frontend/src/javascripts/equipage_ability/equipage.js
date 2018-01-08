import React from 'react'
import PropTypes from 'prop-types'

import ModalEquipageList from './modal/modal_equipages_list'
import GradeForm from './grade_form'

export default class Equipage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      equipages: [],
      selectedEquipage: null
    }
    this.handleClickEquipageSettingImage = this.handleClickEquipageSettingImage.bind(this)
    this.handleSelectEquipage = this.handleSelectEquipage.bind(this)
    this.onClickCloseButton = this.onClickCloseButton.bind(this)
    this.getEquipages = this.getEquipages.bind(this)
  }

  handleClickEquipageSettingImage() {
    this.getEquipages()
  }

  handleSelectEquipage(equipage) {
    this.setState({modalIsOpen: false, selectedEquipage: equipage})
    this.props.onSelectEquipage(this.props.part, equipage)
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
            <GradeForm grades={this.state.selectedEquipage.range_grades} selectedGradeLevel={this.state.selectedEquipage.min_grade} />
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
  onSelectEquipage: PropTypes.func.isRequired,
  part: PropTypes.string.isRequired
}
