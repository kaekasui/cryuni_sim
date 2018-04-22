import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'

export default class Hero extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickHeroImage = this.handleClickHeroImage.bind(this)
  }

  handleClickHeroImage() {
    this.props.selectHero(this.props.hero)
  }

  render() {
    return (
      <div className='heroComponent'>
        <span className='hero-image' data-tip={this.props.hero.name} onClick={this.handleClickHeroImage} >
          <ReactTooltip />
          {this.props.hero.image_name ? (
            <img alt={this.props.hero.name} src={'assets/hero_icons/' + this.props.hero.image_name} />
          ) : (
            <img alt={this.props.hero.name} src={'assets/hero_icons/no_image_icon.jpg'} />
          )}
          {this.props.selectedHero.name == this.props.hero.name ? (
            <img className='selected-fether' src='assets/fether.png' />
          ) : (
            null
          )}
        </span>
      </div>
    )
  }
}

Hero.propTypes = {
  hero: PropTypes.object.isRequired,
  selectHero: PropTypes.func.isRequired,
  selectedHero: PropTypes.object
}
