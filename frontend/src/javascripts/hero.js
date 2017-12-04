import React from 'react'
import PropTypes from 'prop-types'

export default class Hero extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='heroComponent'>
        <span className='hero_image'>
          <img src={ 'assets/' + this.props.hero.image_name } />
        </span>
      </div>
    )
  }
}

Hero.propTypes = {
  hero: PropTypes.object.isRequired
}
