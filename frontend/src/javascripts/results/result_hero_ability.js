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
        {this.props.heroAbility.map((ability) => (
          <span key={ability.id}>{ability.score}</span>
        ))}
      </div>
    )
  }
}

ResultHeroAbility.propTypes = {
  heroAbility: PropTypes.array.isRequired
}
