import React from 'react'

import ModalCardsList from './modal/modal_cards_list'
import GradeForm from './grade_form'

export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      selectedCard: null,
      selectedCardGrade: 0
    }
    this.handleClickCard = this.handleClickCard.bind(this)
    this.handleSelectCardGrade = this.handleSelectCardGrade.bind(this)
    this.onClickCloseButton = this.onClickCloseButton.bind(this)
    this.onSelectCard = this.onSelectCard.bind(this)
  }

  handleClickCard() {
    this.setState({modalIsOpen: true})
  }

  onClickCloseButton() {
    this.setState({modalIsOpen: false})
  }

  onSelectCard(card, abilities) {
    this.setState({modalIsOpen: false, selectedCard: card, selectedCardGrade: (card || {}).min_grade})
  }

  handleSelectCardGrade(gradeLevel) {
    this.setState({selectedCardGrade: gradeLevel})
    //this.props.onSelectCard(this.state.selectedCard, gradeLevel)
  }

  render() {
    return (
      <div className='cardComponent'>
        <div className='selectable-card' onClick={this.handleClickCard}>
          {this.state.selectedCard ? (
            <span>{this.state.selectedCard.name}</span>
          ) : (
            <img src={'assets/cards/add_card.png'} />
          )}
        </div>
        <div className='grades'>
          {this.state.selectedCard ? (
            <GradeForm grades={this.state.selectedCard.range_grades} onSelectGrade={this.handleSelectCardGrade} selectedGradeLevel={this.state.selectedCardGrade} />
          ) : (
            null
          )}
        </div>
        <ModalCardsList handleClickCloseButton={this.onClickCloseButton} handleSelectCard={this.onSelectCard} modalIsOpen={this.state.modalIsOpen} />
      </div>
    )
  }
}
