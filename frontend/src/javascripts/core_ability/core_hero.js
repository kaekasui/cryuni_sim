import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'

export default class CoreHero extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickHeroImage = this.handleClickHeroImage.bind(this)
  }

  handleClickHeroImage() {
  }

  render() {
    return (
      <div className='coreHeroComponent'>
        <span className='hero-image' data-tip={this.props.hero.name} onClick={this.handleClickHeroImage} >
          <ReactTooltip />
          <img alt={this.props.hero.name} className={this.props.hero.locked ? 'locked' : ''} src={'assets/' + this.props.hero.image_name} />
        </span>
      </div>
    )
  }
}

CoreHero.propTypes = {
  hero: PropTypes.object.isRequired
}
