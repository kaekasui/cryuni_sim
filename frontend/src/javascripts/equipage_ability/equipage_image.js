import React from 'react'
import PropTypes from 'prop-types'

export default class EquipageImage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='equipageImageComponent'>
        {this.props.imageName ? (
          <span className='equipage-image'>
            <img className='equipage-background' src={'assets/grades/grade_gray.png'} />
            <img className='equipage' src={'assets/equipages/' + this.props.imageName} />
          </span>
        ) : (
          <img className='hatena' src={'assets/hatena.png'} />
        )}
      </div>
    )
  }
}

EquipageImage.propTypes = {
  imageName: PropTypes.string
}
