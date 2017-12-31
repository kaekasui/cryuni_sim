import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

export default class Equipage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      equipages: []
    }
    this.handleClickEquipageSettingImage = this.handleClickEquipageSettingImage.bind(this)
    this.handleClickCloseButton = this.handleClickCloseButton.bind(this)
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

  handleClickCloseButton() {
    this.setState({modalIsOpen: false})
  }

  render() {
    return (
      <div className='equipageComponent'>
        <div className='equipage-image' onClick={this.handleClickEquipageSettingImage}>
          <img src={'assets/equipages/blank_' + this.props.part + '.png'} />
        </div>
        <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen}>
          <button aria-label='Close' className='close' onClick={this.handleClickCloseButton} type='button'>
            <span aria-hidden='true'>{'&times;'}</span>
          </button>
          <table className='table table-bordered'>
            <tbody>
              {this.state.equipages.map((equipage) =>
                (<tr key={equipage.id}>
                  <td>{equipage.name}</td>
                  <td />
                </tr>)
              )}
            </tbody>
          </table>
        </Modal>
      </div>
    )
  }
}

Equipage.propTypes = {
  part: PropTypes.string.isRequired
}
