import React from 'react'

import ModalTwitter from './modal_twitter'

export default class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false
    }
    this.handleClickPresentBoxButton = this.handleClickPresentBoxButton.bind(this)
    this.handleClickInfoButton = this.handleClickInfoButton.bind(this)
    this.onClickCloseButton = this.onClickCloseButton.bind(this)
  }

  handleClickPresentBoxButton() {
    window.open('http://amzn.to/2D4YEfG')
  }

  handleClickInfoButton() {
    this.setState({modalIsOpen: true})
  }

  onClickCloseButton() {
    this.setState({modalIsOpen: false})
  }

  render() {
    return (
      <div className='messageComponent'>
        <ul className='info-button'>
          <li onClick={this.handleClickPresentBoxButton}>
            <img src={'assets/present_box_button.png'} />
          </li>
          <li onClick={this.handleClickInfoButton}>
            <img src={'assets/info_button.png'} />
          </li>
        </ul>
        <ModalTwitter handleClickCloseButton={this.onClickCloseButton} modalIsOpen={this.state.modalIsOpen} />
      </div>
    )
  }
}
