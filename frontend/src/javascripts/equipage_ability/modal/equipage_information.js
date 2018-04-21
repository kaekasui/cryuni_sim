import React from 'react'
import PropTypes from 'prop-types'

export default class EquipageInformation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='equipageInformationComponent'>
        <div className='panel panel-default'>
          <div className='panel-body'>
            {this.props.equipage.name}
          </div>
        </div>
      </div>
    )
  }
}

EquipageInformation.propTypes = {
  equipage: PropTypes.object.isRequired
}
