import React from 'react'
import PropTypes from 'prop-types'

import VipLevelForm from './vip_level_form'
import Title from './../common/title'

export default class VipAbilitySetting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vipAbilities: [],
      vipLevel: ''
    }
    this.setVipAbility = this.setVipAbility.bind(this)
  }

  setVipAbility(vip_ability) {
    this.setState({vipLevel: vip_ability.vip_level})
    this.props.handleSelectVipAbility(vip_ability)
  }

  render() {
    return (
      <div className='vipAbilitySettingComponent'>
        <Title title='◆VIPアビリティ' />
        <div className='vip-ability'>
          <VipLevelForm handleSetVipAbility={this.setVipAbility} />
        </div>
      </div>
    )
  }
}

VipAbilitySetting.propTypes = {
  handleSelectVipAbility: PropTypes.func.isRequired
}
