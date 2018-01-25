import React from 'react'

export default class ResultDetailImage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='resultDetailImageComponent'>
        <span className='ability-background-image'>
          <img src={'assets/ability-background.jpg'} />
        </span>
      </div>
    )
  }
}
