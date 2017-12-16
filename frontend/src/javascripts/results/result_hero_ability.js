import React from 'react'
import PropTypes from 'prop-types'

export default class ResultHeroAbility extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='resultHeroAbilityComponent'>
        {this.props.heroAbility.attached_hero_abilities.length > 0 ? (
          <div className='panel panel-default'>
            <div className='panel-heading'>
              {'ヒーローアビリティ'}
            </div>
            <div className='panel-body'>
              <ul>
                {this.props.heroAbility.attached_hero_abilities.map((ability) => (
                  <li key={ability.id}>{ability.ability_name} {ability.score} {ability.unit}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          null
        )}
      </div>
    )
  }
}

ResultHeroAbility.propTypes = {
  heroAbility: PropTypes.object.isRequired
}
