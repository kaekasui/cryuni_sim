import React from 'react'
import PropTypes from 'prop-types'

export default class ResultHeroAbility extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='resultHeroAbilityComponent'>
        {'ヒーローアビリティ'}
      </div>
    )
  }
}

ResultHeroAbility.propTypes = {
  hero: PropTypes.object
}
