import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'

export default class Hero extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickHeroImage = this.handleClickHeroImage.bind(this)
  }

  handleClickHeroImage() {
    this.getHeroAbilities()
    this.props.selectHero(this.props.hero)
  }

  getHeroAbilities() {
    fetch('api/heros/' + this.props.hero.id + '/hero_abilities')
      .then((res) => res.json())
      .then((res) => {
        this.props.handleLoadHeroAbilities(res)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <div className='heroComponent'>
        <span className='hero-image' data-tip={this.props.hero.name} onClick={this.handleClickHeroImage} >
          <ReactTooltip />
          <img alt={this.props.hero.name} src={'assets/' + this.props.hero.image_name} />
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
  selectedHero: PropTypes.object,
  handleLoadHeroAbilities: PropTypes.func.isRequired
}
