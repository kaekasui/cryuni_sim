import React from 'react'
import PropTypes from 'prop-types'

import ResultTotalCoreAbility from './result_total_core_ability'
import ResultDetailCoreAbility from './result_detail_core_ability'

export default class ResultCoreAbility extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='resultCoreAbilityComponent'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            {'コアアビリティ'}
          </div>
          <div className='panel-body'>
            <ResultTotalCoreAbility coreHeros={this.props.coreHeros} />
            <hr />
            <ResultDetailCoreAbility coreHeros={this.props.coreHeros} />
          </div>
        </div>
      </div>
    )
  }
}

ResultCoreAbility.propTypes = {
  coreHeros: PropTypes.array.isRequired
}
