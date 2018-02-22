import React from 'react'
import PropTypes from 'prop-types'

export default class ModalCard extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickCard = this.handleClickCard.bind(this)
  }

  handleClickCard() {
    this.props.onClickCard(this.props.card)
  }

  render() {
    return (
      <tr className='modalCardComponent modal-card-line' key={this.props.card.id} onClick={this.handleClickCard}>
        <td>{this.props.card.card_name}</td>
      </tr>
    )
  }
}

ModalCard.propTypes = {
  card: PropTypes.object.isRequired,
  onClickCard: PropTypes.func.isRequired
}
