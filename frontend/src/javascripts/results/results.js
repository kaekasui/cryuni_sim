import React from 'react'
import PropTypes from 'prop-types'

export default class Results extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='resultsComponent'>
        <span className='cryuni-background-image'>
          <img src={'assets/cryuni_background.png'} />
        </span>
      </div>
    )
  }
}

Results.propTypes = {
  hero: PropTypes.object
}
