import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import ModalCard from './modal_card'

export default class ModalCardsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
    this.handleClickCloseButton = this.handleClickCloseButton.bind(this)
    this.handleClickEmptyCard = this.handleClickEmptyCard.bind(this)
    this.handleClickCard = this.handleClickCard.bind(this)
    this.getCards = this.getCards.bind(this)
  }

  componentWillMount() {
    this.getCards()
  }

  handleClickEmptyCard() {
  }

  handleClickCard() {
  }

  handleClickCloseButton() {
    this.props.handleClickCloseButton()
  }

  getCards() {
    fetch('api/cards')
      .then((res) => res.json())
      .then((res) => {
        this.setState({cards: res})
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <div className='modalCardsListComponent'>
        <Modal ariaHideApp={false} isOpen={this.props.modalIsOpen}>
          <button aria-label='Close' className='close' onClick={this.handleClickCloseButton} type='button'>
            <span dangerouslySetInnerHTML={{__html: '&times'}} />
          </button>
          <table className='table table-bordered'>
            <tbody>
              <tr className='modal-card-line' onClick={this.handleClickEmptyCard}>
                <td colSpan='2'>{'なし'}</td>
              </tr>
              {this.state.cards.map((card) =>
                <ModalCard card={card} key={card.id} onClickCard={this.handleClickCard} />
              )}
            </tbody>
          </table>
        </Modal>
      </div>
    )
  }
}

ModalCardsList.propTypes = {
  handleClickCloseButton: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired
}
