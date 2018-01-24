import React from 'react'
import PropTypes from 'prop-types'

export default class Attack extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='attackComponent'>
        <span className='abilityName'>{this.props.abilityName}</span>
        <br />
        <span>{'+' + this.props.score}</span>
        <span>{'%'}</span>
      </div>
    )
  }
}

Attack.propTypes = {
  abilityName: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}
