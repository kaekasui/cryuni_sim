import React from 'react'
import PropTypes from 'prop-types'

export default class Hero extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="HeroComponent">
        { this.props.hero.name }
      </div>
    )
  }
}

Hero.propTypes = {
  hero: PropTypes.object.isRequired
}
