import React from 'react'
import PropTypes from 'prop-types'

export default class Hero extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickHeroImage = this.handleClickHeroImage.bind(this)
  }

  handleClickHeroImage() {
    this.getHeroAbilities()
  }

  getHeroAbilities() {
    fetch('api/heros/' + this.props.hero.id + '/hero_abilities')
      .then((res) => res.json())
      .then((res) => {
        this.props.handleLoad(res)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <div className='heroComponent'>
        <span className='hero_image' onClick={this.handleClickHeroImage} >
          <img src={'assets/' + this.props.hero.image_name} />
        </span>
      </div>
    )
  }
}

Hero.propTypes = {
  hero: PropTypes.object.isRequired,
  handleLoad: PropTypes.func.isRequired
}
