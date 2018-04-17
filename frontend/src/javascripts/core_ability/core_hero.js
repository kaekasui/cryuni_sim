import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'

export default class CoreHero extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickCoreHeroImage = this.handleClickCoreHeroImage.bind(this)
  }

  handleClickCoreHeroImage() {
    this.props.handleClickCoreHeroImage(this.props.hero.id)
  }

  render() {
    let image_path = this.props.hero.image_name ? (
      'assets/hero_icons/' + this.props.hero.image_name
    ) : (
      'assets/hero_icons/no_image_icon.jpg'
    )
    return (
      <div className='coreHeroComponent'>
        <span className='hero-image' data-tip={this.props.hero.name} >
          <ReactTooltip />
          <img alt={this.props.hero.name} className={this.props.hero.padlocked ? 'locked' : ''} onClick={this.handleClickCoreHeroImage} src={image_path} />
          { this.props.hero.padlocked ? (
            <img className='padlock' onClick={this.handleClickCoreHeroImage} src='assets/padlock.png' />
          ) : (
            null
          )}
        </span>
      </div>
    )
  }
}

CoreHero.propTypes = {
  hero: PropTypes.object.isRequired,
  handleClickCoreHeroImage: PropTypes.func.isRequired
}
