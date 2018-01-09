import React from 'react'
import PropTypes from 'prop-types'

import Abilities from './../common/abilities'

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
            <Abilities abilities={this.props.vipAbility.attached_vip_abilities} />
          </div>
        </div>
      </div>
    )
  }
}

ResultVipAbility.propTypes = {
  vipAbility: PropTypes.object.isRequired
}
