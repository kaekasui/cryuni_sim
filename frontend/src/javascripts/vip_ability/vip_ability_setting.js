import React from 'react'
import PropTypes from 'prop-types'

import VipRankForm from './vip_rank_form'
import Title from './../common/title'

export default class VipAbilitySetting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vipAbilities: [],
      vipRank: ''
    }
    this.setVipAbility = this.setVipAbility.bind(this)
  }

  setVipAbility(vip_ability) {
    this.setState({vipRank: vip_ability.vip_rank})
    this.props.handleSelectVipAbility(vip_ability)
  }

  render() {
    return (
      <div className='vipAbilitySettingComponent'>
        <Title title='◆VIPアビリティ' />
        <div className='vip-ability'>
          <VipRankForm handleSetVipAbility={this.setVipAbility} />
        </div>
      </div>
    )
  }
}

VipAbilitySetting.propTypes = {
  handleSelectVipAbility: PropTypes.func.isRequired
}
