import React from 'react'
import PropTypes from 'prop-types'

import EquipageImage from './../equipage_image'

export default class EquipageInformation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='equipageInformationComponent'>
        <div className='panel panel-default'>
          <div className='panel-body'>
            <EquipageImage imageName={this.props.equipage.image_name} />
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
