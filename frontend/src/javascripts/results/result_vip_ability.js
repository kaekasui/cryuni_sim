import React from 'react'
import PropTypes from 'prop-types'

export default class ResultVipAbility extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='resultVipAbilityComponent'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            {'VIPアビリティ'}
          </div>
          <div className='panel-body'>
            {this.props.vipAbility.attached_vip_abilities.length > 0 ? (
              <ul>
                {this.props.vipAbility.attached_vip_abilities.map((ability) => (
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

ResultVipAbility.propTypes = {
  vipAbility: PropTypes.object.isRequired
}
