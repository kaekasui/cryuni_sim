import React from 'react'

export default class Message extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickPanel = this.handleClickPanel.bind(this)
  }

  handleClickPanel() {
    window.open('http://amzn.to/2D4YEfG')
  }

  render() {
    return (
      <div className='messageComponent'>
        <div className='panel panel-default' onClick={this.handleClickPanel}>
          <div className='panel-body message'>
            {'当サイトへの課金をお待ちしてます。サイトの管理費、開発・運用費にあてさせていただきます。一日一回クリックだけでも何卒ーヾ(｡>﹏<｡)ﾉﾞ✧*。'}
          </div>
        </div>
      </div>
    )
  }
}
