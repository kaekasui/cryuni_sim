import React from 'react'
import PropTypes from 'prop-types'

export default class ModalEquipage extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickEquipage = this.handleClickEquipage.bind(this)
    this.handleMouseEnterEquipage = this.handleMouseEnterEquipage.bind(this)
  }

  handleClickEquipage() {
    this.props.onClickEquipage(this.props.equipage)
  }

  handleMouseEnterEquipage() {
    this.props.onMouseEnterEquipage(this.props.equipage)
  }

  render() {
    let mouseEnter = this.props.mouseEnterEquipage.id == this.props.equipage.id
    return (
      <tr className='modalEquipageComponent modal-equipage-line' key={this.props.equipage.id} onClick={this.handleClickEquipage}>
        <td>{'Lv. ' + this.props.equipage.level}</td>
        <td>{this.props.equipage.name}</td>
        <td className='info-icon-td' onMouseEnter={this.handleMouseEnterEquipage}><img className={'info-icon ' + (mouseEnter ? 'mouse-enter' : '')} src='assets/info_icon.png' /></td>
      </tr>
    )
  }
}

ModalEquipage.propTypes = {
  equipage: PropTypes.object.isRequired,
  onClickEquipage: PropTypes.func.isRequired,
  onMouseEnterEquipage: PropTypes.func.isRequired,
  mouseEnterEquipage: PropTypes.object
}
