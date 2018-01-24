import React from 'react'
import PropTypes from 'prop-types'

import Abilities from './../../common/abilities'

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
                      <li><b>{this.props.equipageAbility[part].equipage.part_human_name}</b>
                        <Abilities abilities={this.props.equipageAbility[part].attached_equipage_abilities} />
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
