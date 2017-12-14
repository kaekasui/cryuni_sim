import React from 'react'
import PropTypes from 'prop-types'

export default class CheckMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      checked: false
    }
  }

  render() {
    return (
      <div className='checkMessageComponent'>
        <p className='check-message'>
          {this.props.message}
        </p>
      </div>
    )
  }
}

CheckMessage.propTypes = {
  checked: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
}
