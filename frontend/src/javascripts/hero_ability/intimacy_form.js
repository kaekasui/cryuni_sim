import React from 'react'
import PropTypes from 'prop-types'

export default class IntimacyForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleChangeIntimacy = this.handleChangeIntimacy.bind(this)
  }

  handleChangeIntimacy(e) {
    this.props.handleSetIntimacy(e.target.value)
  }

  render() {
    return (
      <div className='intimacyFormComponent'>
        {'英雄親密度 レベル'}
        <input className='form-control' onChange={this.handleChangeIntimacy} type='number' />
      </div>
    )
  }
}

IntimacyForm.propTypes = {
  handleSetIntimacy: PropTypes.func.isRequired
}
