import React from 'react'

import ModalCardsList from './modal/modal_cards_list'

export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
    }
    this.handleClickCard = this.handleClickCard.bind(this)
    this.onClickCloseButton = this.onClickCloseButton.bind(this)
  }

  handleClickCard() {
    this.setState({modalIsOpen: true})
  }

  onClickCloseButton() {
    this.setState({modalIsOpen: false})
  }

  render() {
    return (
      <div className='cardComponent'>
        <div className='card-field' onClick={this.handleClickCard}>
          {'カード'}
        </div>
        <ModalCardsList handleClickCloseButton={this.onClickCloseButton} modalIsOpen={this.state.modalIsOpen} />
      </div>
    )
  }
}
