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
          <img src={'assets/equipages/' + this.props.imageName} />
        ) : (
          <img src={'assets/hatena.png'} />
        )}
      </div>
    )
  }
}

EquipageImage.propTypes = {
  imageName: PropTypes.string
}
