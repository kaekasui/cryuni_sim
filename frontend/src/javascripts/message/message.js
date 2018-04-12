import React from 'react'
import ReactTooltip from 'react-tooltip'
import ReactCookie from 'react-cookies'

import ModalTwitter from './modal_twitter'

export default class Message extends React.Component {
  constructor(props) {
    super(props)
    let targetTime = new Date()
    targetTime.setHours(targetTime.getHours() - 12)
    this.state = {
      modalIsOpen: false,
      clickedPresentBox: targetTime < ReactCookie.load('clicked_present_box_at')
    }
    this.handleClickPresentBoxButton = this.handleClickPresentBoxButton.bind(this)
    this.handleClickInfoButton = this.handleClickInfoButton.bind(this)
    this.onClickCloseButton = this.onClickCloseButton.bind(this)
  }

  handleClickPresentBoxButton() {
    this.setState({clickedPresentBox: true})
    ReactCookie.save('clicked_present_box_at', new Date().getTime())
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
