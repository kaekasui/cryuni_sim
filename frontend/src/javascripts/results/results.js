import React from 'react'
import PropTypes from 'prop-types'

import ResultImage from './result_image'
import ResultHeroAbility from './result_hero_ability'

export default class Results extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='resultsComponent'>
        <ResultImage hero={this.props.hero} />
        <ResultHeroAbility />
      </div>
    )
  }
}

Results.propTypes = {
  hero: PropTypes.object.isRequired
}
