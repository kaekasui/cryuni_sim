import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import ModalEquipage from './modal_equipage'

export default class ModalEquipagesList extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickCloseButton = this.handleClickCloseButton.bind(this)
    this.handleClickEquipage = this.handleClickEquipage.bind(this)
    this.handleClickEmptyEquipage = this.handleClickEmptyEquipage.bind(this)
  }

  handleClickCloseButton() {
    this.props.handleClickCloseButton()
  }

  handleClickEmptyEquipage() {
    this.props.onSelectEquipage(null)
  }

  handleClickEquipage(equipage) {
    this.props.onSelectEquipage(equipage)
  }

  render() {
    return (
      <div className='modalEquipagesListComponent'>
        <Modal ariaHideApp={false} isOpen={this.props.modalIsOpen}>
          <button aria-label='Close' className='close' onClick={this.handleClickCloseButton} type='button'>
            <span dangerouslySetInnerHTML={{__html: '&times'}} />
          </button>
          <table className='table table-bordered'>
            <tbody>
              <tr className='modal-equipage-line' onClick={this.handleClickEmptyEquipage}>
                <td colSpan='2'>{'なし'}</td>
              </tr>
              {this.props.equipages.map((equipage) =>
                <ModalEquipage equipage={equipage} key={equipage.id} onClickEquipage={this.handleClickEquipage} />
              )}
            </tbody>
          </table>
        </Modal>
      </div>
    )
  }
}

ModalEquipagesList.propTypes = {
  handleClickCloseButton: PropTypes.func.isRequired,
  onSelectEquipage: PropTypes.func.isRequired,
  equipages: PropTypes.array.isRequired,
  modalIsOpen: PropTypes.bool.isRequired
}
