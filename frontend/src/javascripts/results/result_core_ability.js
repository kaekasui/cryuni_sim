import React from 'react'
import PropTypes from 'prop-types'

import ResultTotalCoreAbility from './result_total_core_ability'

export default class ResultCoreAbility extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='resultCoreAbilityComponent'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            {'コアアビリティ'}
          </div>
          <div className='panel-body'>
            <ResultTotalCoreAbility coreHeros={this.props.coreHeros} />
            <hr />
            <span>{'- 詳細 -'}</span>
            {this.props.coreHeros.map((coreHero) => (
              <div key={coreHero.id}>
                {coreHero.attached_core_abilities.length > 0 ? (
                  <div className='core-hero'>
                    <span className='hero-name'>{coreHero.name}</span>
                    <ul>
                      {coreHero.attached_core_abilities.map((ability) => (
                        <li key={ability.id}>{ability.ability_name} {ability.score} {ability.unit}</li>
                      ))}
                    </ul>
                  </div>
                ) :(
                  null
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

ResultCoreAbility.propTypes = {
  coreHeros: PropTypes.array.isRequired
}
