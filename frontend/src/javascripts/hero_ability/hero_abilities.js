import React from 'react'
import PropTypes from 'prop-types'

import HeroAbility from './hero_ability'

export default class HeroAbilities extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickHeroAbility = this.handleClickHeroAbility.bind(this)
  }

  //shouldComponentUpdate(nextProps) {
  //  if (nextProps.intimacy !== this.props.intimacy || nextProps.heroAbilities !== this.props.heroAbilities) {
  //    return true
  //  } else {
  //    return false
  //  }
  //}

  //componentDidUpdate() {
  //  let updated = false
  //  for (let index in this.props.heroAbilities) {
  //    if (this.props.heroAbilities[index].intimacy_level_from <= this.props.intimacy && this.props.intimacy <= this.props.heroAbilities[index].intimacy_level_to) {
  //      this.props.handleSelectHeroAbility(this.props.heroAbilities[index])
  //      updated = true
  //    }
  //  }
  //  if (updated == false) {
  //    this.props.handleSelectHeroAbility({attached_hero_abilities: []})
  //  }
  //}
  //
  handleClickHeroAbility(ability) {
    this.props.handleSelectHeroAbility({attached_hero_abilities: ability.attached_hero_abilities}, ability.id)
  }

  render() {
    return (
      <div className='heroAbilitiesComponent'>
        <table className='table table-bordered'>
          <tbody>
            {this.props.heroAbilities.length? (
              <tr>
                <th className='intimacy_level'>{'レベル'}</th>
                <th className='attached_abilities'>{'アビリティ'}</th>
              </tr>
            ) : (
              null
            )}
            {this.props.heroAbilities.map((ability) => (
              <HeroAbility ability={ability} key={ability.id} selectedIntimacy={this.props.selectedIntimacy} handleClickHeroAbility={this.handleClickHeroAbility} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

HeroAbilities.propTypes = {
  selectedIntimacy: PropTypes.number,
  handleSelectHeroAbility: PropTypes.func.isRequired,
  heroAbilities: PropTypes.array.isRequired
}
