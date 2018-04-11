import React from 'react'

import ModalTwitter from './modal_twitter'

export default class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false
    }
    this.handleClickPanel = this.handleClickPanel.bind(this)
    this.handleClickInfoButton = this.handleClickInfoButton.bind(this)
    this.onClickCloseButton = this.onClickCloseButton.bind(this)
  }

  handleClickPanel() {
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
        <div className='panel panel-default' onClick={this.handleClickPanel}>
          <div className='panel-body message'>
            {'一日一回クリックを何卒ーヾ(｡>﹏<｡)ﾉﾞ✧*。'}
          </div>
        </div>
        <div>
          <a className='btn btn-default' onClick={this.handleClickInfoButton}>{'お知らせ'}</a>
          <ModalTwitter handleClickCloseButton={this.onClickCloseButton} modalIsOpen={this.state.modalIsOpen} />
        </div>
      </div>
    )
  }
}
