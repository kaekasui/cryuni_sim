import React from 'react'
import PropTypes from 'prop-types'

import HeroAbility from './hero_ability'
import Loading from './../common/loading'

export default class HeroAbilities extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickHeroAbility = this.handleClickHeroAbility.bind(this)
  }

  shouldComponentUpdate(nextProps) {
    return this.props.heroAbilities != nextProps.heroAbilities
  }

  handleClickHeroAbility(ability) {
    this.props.handleSelectHeroAbility({attached_hero_abilities: ability.attached_hero_abilities}, ability.id)
  }

  render() {
    return (
      <div className='heroAbilitiesComponent'>
        {this.props.isLoading ? (
          <Loading />
        ) : (
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
                <HeroAbility ability={ability} key={ability.id} onClickHeroAbility={this.handleClickHeroAbility} selectedIntimacy={this.props.selectedIntimacy} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    )
  }
}

HeroAbilities.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  selectedIntimacy: PropTypes.number,
  handleSelectHeroAbility: PropTypes.func.isRequired,
  heroAbilities: PropTypes.array.isRequired
}
