import React from 'react'
import PropTypes from 'prop-types'

import Abilities from './../common/abilities'

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
            <Abilities abilities={this.props.heroAbility.attached_hero_abilities} />
          </div>
        </div>
      </div>
    )
  }
}

ResultHeroAbility.propTypes = {
  heroAbility: PropTypes.object.isRequired
}
