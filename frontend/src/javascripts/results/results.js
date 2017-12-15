import React from 'react'
import PropTypes from 'prop-types'

import ResultImage from './result_image'
import ResultHeroAbility from './result_hero_ability'
import ResultVipAbility from './result_vip_ability'

export default class Results extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='resultsComponent'>
        <ResultImage hero={this.props.hero} />
        <ResultHeroAbility heroAbility={this.props.heroAbility} />
        <ResultVipAbility vipAbility={this.props.vipAbility} />
      </div>
    )
  }
}

Results.propTypes = {
  hero: PropTypes.object.isRequired,
  heroAbility: PropTypes.object.isRequired,
  vipAbility: PropTypes.object.isRequired
}
