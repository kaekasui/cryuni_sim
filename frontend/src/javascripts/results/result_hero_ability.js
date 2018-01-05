import React from 'react'
import PropTypes from 'prop-types'

export default class ResultHeroAbility extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='resultHeroAbilityComponent'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            {'ヒーローアビリティ'}
          </div>
          <div className='panel-body'>
            {this.props.heroAbility.attached_hero_abilities.length > 0 ? (
              <ul>
                {this.props.heroAbility.attached_hero_abilities.map((ability) => (
                  <li key={ability.id}>{ability.ability_name} {ability.score} {ability.unit}</li>
                ))}
              </ul>
            ) : (
              null
            )}
          </div>
        </div>
      </div>
    )
  }
}

ResultHeroAbility.propTypes = {
  heroAbility: PropTypes.object.isRequired
}
