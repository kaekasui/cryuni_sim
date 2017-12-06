import React from 'react'
import PropTypes from 'prop-types'

export default class Results extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='resultsComponent'>
        <span className='cryuni-image'>
          <h2>{this.props.hero.name}</h2>
          <span className='cryuni-background-image'>
            <img src={'assets/cryuni_background.png'} />
          </span>
          {this.props.hero.whole_image_name ? (
            <span className='whole-image'>
              <img src={'assets/' + this.props.hero.whole_image_name} />
            </span>
          ) : (
            null
          )}
        </span>
      </div>
    )
  }
}

Results.propTypes = {
  hero: PropTypes.object.isRequired
}
