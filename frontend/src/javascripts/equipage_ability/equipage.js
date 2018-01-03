import React from 'react'
import PropTypes from 'prop-types'

import ModalEquipageList from './modal/modal_equipages_list'

export default class Equipage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      equipages: []
    }
    this.handleClickEquipageSettingImage = this.handleClickEquipageSettingImage.bind(this)
    this.onClickCloseButton = this.onClickCloseButton.bind(this)
    this.getEquipages = this.getEquipages.bind(this)
  }

  handleClickEquipageSettingImage() {
    this.getEquipages()
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
        <div className='equipage-image' onClick={this.handleClickEquipageSettingImage}>
          <img src={'assets/equipages/blank_' + this.props.part + '.png'} />
        </div>
        <ModalEquipageList equipages={this.state.equipages} handleClickCloseButton={this.onClickCloseButton} modalIsOpen={this.state.modalIsOpen} />
      </div>
    )
  }
}

Equipage.propTypes = {
  part: PropTypes.string.isRequired
}
