import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import Tweets from './tweets'

export default class ModalTwitter extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickCloseButton = this.handleClickCloseButton.bind(this)
  }

  handleClickCloseButton() {
    this.props.handleClickCloseButton()
  }

  render() {
    return (
      <div className='modalTwitterComponent'>
        <Modal ariaHideApp={false} isOpen={this.props.modalIsOpen} onRequestClose={this.handleClickCloseButton}>
          <button aria-label='Close' className='close' onClick={this.handleClickCloseButton} type='button'>
            <span dangerouslySetInnerHTML={{__html: '&times'}} />
          </button>
          <Tweets />
        </Modal>
      </div>
    )
  }
}

ModalTwitter.propTypes = {
  handleClickCloseButton: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired
}
