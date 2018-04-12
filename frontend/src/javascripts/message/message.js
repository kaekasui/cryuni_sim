import React from 'react'
import ReactTooltip from 'react-tooltip'

import ModalTwitter from './modal_twitter'

export default class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      clickedPresentBox: false
    }
    this.handleClickPresentBoxButton = this.handleClickPresentBoxButton.bind(this)
    this.handleClickInfoButton = this.handleClickInfoButton.bind(this)
    this.onClickCloseButton = this.onClickCloseButton.bind(this)
  }

  handleClickPresentBoxButton() {
    this.setState({clickedPresentBox: true})
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
        <div className='info-button'>
          <span data-tip={'一日一回クリックをお願いします'} onClick={this.handleClickPresentBoxButton}>
            <ReactTooltip />
            {this.state.clickedPresentBox ? (
              <img src={'assets/present_box_empty_button.png'} />
            ) : (
              <img src={'assets/present_box_button.png'} />
            )}
          </span>
          <span className='break' />
          <span>
            <img src={'assets/info_button.png'} onClick={this.handleClickInfoButton} />
          </span>
        </div>
        <ModalTwitter handleClickCloseButton={this.onClickCloseButton} modalIsOpen={this.state.modalIsOpen} />
      </div>
    )
  }
}
