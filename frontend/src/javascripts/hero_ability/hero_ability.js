import React from 'react'
import PropTypes from 'prop-types'

import AttachedAbilities from './attached_abilities'

export default class HeroAbility extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickHeroAbility = this.handleClickHeroAbility.bind(this)
  }

  handleClickHeroAbility() {
    this.props.onClickHeroAbility(this.props.ability)
  }

  render() {
    return (
      <tr className={'heroAbilityComponent active-ability ' + (this.props.selectedIntimacy == this.props.ability.id ? 'selected-ability' : '')} onClick={this.handleClickHeroAbility}>
        <td>{this.props.ability.intimacy_level}</td>
        <td>
          <AttachedAbilities abilities={this.props.ability.attached_hero_abilities} />
        </td>
      </tr>
    )
  }
}

HeroAbility.propTypes = {
  ability: PropTypes.object.isRequired,
  selectedIntimacy: PropTypes.number,
  onClickHeroAbility: PropTypes.func.isRequired
}
