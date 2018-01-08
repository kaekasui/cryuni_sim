import React from 'react'
import PropTypes from 'prop-types'

export default class ResultEquipageAbility extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='resultEquipageAbilityComponent'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            {'装備アビリティ'}
          </div>
          <div className='panel-body'>
            {Object.keys(this.props.equipageAbility).length > 0 ? (
              <div>
                {Object.keys(this.props.equipageAbility).map((part) => (
                  <ul key={part}>
                    {this.props.equipageAbility[part].equipage ? (
                      <li>{part}
                        <ul>
                          {this.props.equipageAbility[part].ability.map((ability) => (
                            <li key={ability.id}>{ability.ability_name} {ability.score} {ability.unit}</li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      null
                    )}
                  </ul>
                ))}
              </div>
            ) : (
              null
            )}
          </div>
        </div>
      </div>
    )
  }
}

ResultEquipageAbility.propTypes = {
  equipageAbility: PropTypes.object.isRequired
}
