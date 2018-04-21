import React from 'react'
import PropTypes from 'prop-types'

export default class ModalEquipage extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickEquipage = this.handleClickEquipage.bind(this)
    this.handleMouseEnterEquipage = this.handleMouseEnterEquipage.bind(this)
    this.handleMouseLeaveEquipage = this.handleMouseLeaveEquipage.bind(this)
  }

  handleClickEquipage() {
    this.props.onClickEquipage(this.props.equipage)
  }

  handleMouseEnterEquipage() {
    this.props.onMouseEnterEquipage(this.props.equipage)
  }

  handleMouseLeaveEquipage() {
    this.props.onMouseLeaveEquipage()
  }

  render() {
    return (
      <tr className='modalEquipageComponent modal-equipage-line' key={this.props.equipage.id} onClick={this.handleClickEquipage} onMouseEnter={this.handleMouseEnterEquipage} onMouseLeave={this.handleMouseLeaveEquipage}>
        <td>{'Lv. ' + this.props.equipage.level}</td>
        <td>{this.props.equipage.name}</td>
      </tr>
    )
  }
}

ModalEquipage.propTypes = {
  equipage: PropTypes.object.isRequired,
  onClickEquipage: PropTypes.func.isRequired,
  onMouseEnterEquipage: PropTypes.func.isRequired,
  onMouseLeaveEquipage: PropTypes.func.isRequired
}
