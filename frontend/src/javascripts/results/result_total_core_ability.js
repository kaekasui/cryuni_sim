import React from 'react'
import PropTypes from 'prop-types'

export default class ResultTotalCoreAbility extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coreAbility: []
    }
  }

  componentWillReceiveProps() {
    let coreAbilities = []
    for (let index in this.props.coreHeros) {
      coreAbilities.push(this.props.coreHeros[index].attached_core_abilities)
    }
    coreAbilities = [].concat(...coreAbilities)
    let result = coreAbilities.reduce((r, a) => {
      r[a.ability_name] = r[a.ability_name] || []
      r[a.ability_name].ability_name = a.ability_name
      r[a.ability_name].score = (r[a.ability_name].score || 0.0) + Number.parseFloat(a.score)
      r[a.ability_name].unit = a.unit
      return r
    }, Object.create(null))
    result = Object.values(result)
    this.setState({coreAbility: result})
  }

  render() {
    return (
      <div className='resultTotalCoreAbilityComponent'>
        {this.state.coreAbility.length > 0 ? (
          <span>{'- 合計 -'}</span>
        ) : (
          null
        )}
        {this.state.coreAbility.map((ability, index) => (
          <p key={index}>{ability.ability_name} {ability.score} {ability.unit}</p>
        ))}
      </div>
    )
  }
}

ResultTotalCoreAbility.propTypes = {
  coreHeros: PropTypes.array.isRequired
}
