import React from 'react'
import PropTypes from 'prop-types'

export default class ResultImage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='resultImageComponent'>
        <span className='cryuni-image'>
          <h2>{this.props.hero.name}</h2>
          <span className='cryuni-background-image'>
            <img src={'assets/cryuni_background.png'} />
          </span>
          {this.props.hero.whole_image_name ? (
            <span className='whole-image'>
              <img src={'assets/hero_images/' + this.props.hero.whole_image_name} />
            </span>
          ) : (
            null
          )}
          {this.props.vipAbility.image_name ? (
            <span className='vip-rank-image'>
              <img src={'assets/vip_ranks/' + this.props.vipAbility.image_name} />
            </span>
          ) : (
            null
          )}
        </span>
      </div>
    )
  }
}

ResultImage.propTypes = {
  hero: PropTypes.object.isRequired,
  vipAbility: PropTypes.object.isRequired
}
