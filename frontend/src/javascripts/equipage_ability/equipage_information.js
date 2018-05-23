import React from 'react'
import PropTypes from 'prop-types'

import EquipageImage from './equipage_image'
import GradeTabs from './../common/grades/grade_tabs'

export default class EquipageInformation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='equipageInformationComponent'>
        <div className='equipage-name'>{this.props.equipage.name}</div>
        <EquipageImage imageName={this.props.equipage.image_name} />
        <div className='equipage-base-info'>
          <div className='equipage-level'>{'装備レベル：'}{this.props.equipage.level}</div>
          <div className='equipage-card-slot'>{'カードスロット数：'}{this.props.equipage.card_slot}</div>
        </div>
        <GradeTabs grades={this.props.equipage.grades_with_abilities} />
      </div>
    )
  }
}

EquipageInformation.propTypes = {
  equipage: PropTypes.object.isRequired
}
