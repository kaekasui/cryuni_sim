import React from 'react'
import PropTypes from 'prop-types'

import CheckMessage from './../common/check_message'
import Loading from './../common/loading'

export default class VipRankForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      selectedVipRank: undefined,
      vipAbilities: []
    }
    this.handleChangeVipRank = this.handleChangeVipRank.bind(this)
  }

  componentWillMount() {
    this.getVipAbilities()
  }

  handleChangeVipRank(e) {
    this.setState({selectedVipRank: e.target.value})
    for (let index in this.state.vipAbilities) {
      if (this.state.vipAbilities[index].vip_rank == e.target.value) {
        this.props.handleSetVipAbility(this.state.vipAbilities[index])
      }
    }
  }

  getVipAbilities() {
    fetch('api/vip_abilities')
      .then((res) => res.json())
      .then((res) => {
        let zeroLevel = [{vip_rank: 0, attached_vip_abilities: []}]
        this.setState({vipAbilities: zeroLevel.concat(res), isLoading: false})
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <div className='vipRankFormComponent'>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div>
            <CheckMessage checked={this.state.selectedVipRank == undefined ? false : true} message='VIPランクを選択してください' />
            <div className='btn-group' data-toggle='buttons'>
              {this.state.vipAbilities.map((ability) => (
                <label className={'btn btn-default ' + (this.state.selectedVipRank == ability.vip_rank ? 'active' : '')} id={'rank-' + ability.vip_rank} key={ability.vip_rank}>
                  <input autoComplete='off' name='vip-rank' onChange={this.handleChangeVipRank} type='radio' value={ability.vip_rank} />
                  {ability.vip_rank == 0 ? 'なし' : ability.vip_rank}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

VipRankForm.propTypes = {
  handleSetVipAbility: PropTypes.func.isRequired
}
