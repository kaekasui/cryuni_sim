import React from 'react'
import PropTypes from 'prop-types'

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
            {this.props.coreHeros.map((coreHero) => (
              <div key={coreHero.id}>
                {coreHero.attached_core_abilities.length > 0 ? (
                  <div>{coreHero.name}
                    <ul>
                      {coreHero.attached_core_abilities.map((ability) => (
                        <li key={ability.id}>{ability.ability_name}</li>
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
