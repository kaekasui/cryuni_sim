import React from 'react'
import PropTypes from 'prop-types'

export default class Hero extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='heroComponent'>
        <img src={ 'assets/' + this.props.hero.image_name } />
      </div>
    )
  }
}

Hero.propTypes = {
  hero: PropTypes.object.isRequired
}
