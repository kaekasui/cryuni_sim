import React from 'react'
import PropTypes from 'prop-types'

import Abilities from './../../common/abilities'

export default class ResultDetailCoreAbility extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='resultDetailCoreAbilityComponent'>
        {this.props.coreHeros.length > 0 ? (
          <span>{'- 詳細 -'}</span>
        ) : (
          null
        )}
        {this.props.coreHeros.map((coreHero) => (
          <div key={coreHero.id}>
            {coreHero.attached_core_abilities.length > 0 ? (
              <div className='core-hero'>
                <span className='hero-name'>{coreHero.name}</span>
                <Abilities abilities={coreHero.attached_core_abilities} />
              </div>
            ) :(
              null
            )}
          </div>
        ))}
      </div>
    )
  }
}

ResultDetailCoreAbility.propTypes = {
  coreHeros: PropTypes.array.isRequired
}
