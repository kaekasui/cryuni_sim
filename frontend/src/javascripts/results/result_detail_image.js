import React from 'react'

export default class ResultDetailImage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='resultDetailImageComponent'>
        <div className='detail-ability-list'>
          {'※その他ステータスの合計値：Coming Soon!!'}
        </div>
        <span className='ability-background-image'>
          <img src={'assets/ability-background.jpg'} />
        </span>
      </div>
    )
  }
}
