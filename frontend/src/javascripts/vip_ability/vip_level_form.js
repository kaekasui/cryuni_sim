import React from 'react'
import PropTypes from 'prop-types'

import CheckMessage from './../common/check_message'
import Loading from './../common/loading'

export default class VipLevelForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      selectedVipLevel: undefined,
      vipAbilities: []
    }
    this.handleChangeVipLevel = this.handleChangeVipLevel.bind(this)
  }

  componentWillMount() {
    this.getVipAbilities()
  }

  handleChangeVipLevel(e) {
    this.setState({selectedVipLevel: e.target.value})
    for (let index in this.state.vipAbilities) {
      if (this.state.vipAbilities[index].vip_level == e.target.value) {
        this.props.handleSetVipAbility(this.state.vipAbilities[index])
      }
    }
  }

  getVipAbilities() {
    fetch('api/vip_abilities')
      .then((res) => res.json())
      .then((res) => {
        let zeroLevel = [{vip_level: 0, attached_vip_abilities: []}]
        this.setState({vipAbilities: zeroLevel.concat(res), isLoading: false})
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <div className='vipLevelFormComponent'>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div>
            <CheckMessage checked={this.state.selectedVipLevel == undefined ? false : true} message='VIPレベルを選択してください' />
            <div className='btn-group' data-toggle='buttons'>
              {this.state.vipAbilities.map((ability) => (
                <label className={'btn btn-default ' + (this.state.selectedVipLevel == ability.vip_level ? 'active' : '')} id={'level-' + ability.vip_level} key={ability.vip_level}>
                  <input autoComplete='off' name='vip-level' onChange={this.handleChangeVipLevel} type='radio' value={ability.vip_level} />
                  {ability.vip_level == 0 ? 'なし' : ability.vip_level}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

VipLevelForm.propTypes = {
  handleSetVipAbility: PropTypes.func.isRequired
}
