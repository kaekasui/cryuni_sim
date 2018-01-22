import React from 'react'
import PropTypes from 'prop-types'

import ResultImage from './result_image'
import ResultHeroAbility from './result_abilities/result_hero_ability'
import ResultVipAbility from './result_abilities/result_vip_ability'
import ResultCoreAbility from './result_abilities/result_core_ability'
import ResultEquipageAbility from './result_abilities/result_equipage_ability'

export default class Results extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='resultsComponent'>
        <div className='col-md-8'>
          <ResultImage hero={this.props.hero} vipAbility={this.props.vipAbility} />
        </div>
        <div className='col-md-4'>
          <ResultHeroAbility heroAbility={this.props.heroAbility} />
          <ResultVipAbility vipAbility={this.props.vipAbility} />
          <ResultCoreAbility coreHeros={this.props.coreHeros} />
          <ResultEquipageAbility equipageAbility={this.props.equipageAbility} />
        </div>
      </div>
    )
  }
}

Results.propTypes = {
  hero: PropTypes.object.isRequired,
  heroAbility: PropTypes.object.isRequired,
  vipAbility: PropTypes.object.isRequired,
  equipageAbility: PropTypes.object.isRequired,
  coreHeros: PropTypes.array.isRequired
}
