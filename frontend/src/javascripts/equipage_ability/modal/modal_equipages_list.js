import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import ModalEquipage from './modal_equipage'
import EquipageInformation from './../equipage_information'
import Loading from './../../common/loading'

export default class ModalEquipagesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      equipages: [],
      mouseEnterEquipage: {},
      isLoading: true
    }
    this.handleClickCloseButton = this.handleClickCloseButton.bind(this)
    this.handleClickEquipage = this.handleClickEquipage.bind(this)
    this.handleMouseEnterEquipage = this.handleMouseEnterEquipage.bind(this)
    this.handleMouseLeaveEquipage = this.handleMouseLeaveEquipage.bind(this)
    this.handleClickEmptyEquipage = this.handleClickEmptyEquipage.bind(this)
    this.getEquipages = this.getEquipages.bind(this)
  }

  componentWillMount() {
    this.getEquipages()
  }

  getEquipages() {
    fetch('api/equipages/' + this.props.part)
      .then((res) => res.json())
      .then((res) => {
        this.setState({equipages: res, isLoading: false})
      })
      .catch((error) => {
        console.error(error)
      })
  }

  handleClickCloseButton() {
    this.props.handleClickCloseButton()
  }

  handleClickEmptyEquipage() {
    this.props.onSelectEquipage(null)
  }

  handleClickEquipage(equipage) {
    this.props.onSelectEquipage(equipage)
  }

  handleMouseEnterEquipage(equipage) {
    this.setState({mouseEnterEquipage: equipage})
  }

  handleMouseLeaveEquipage() {
    this.setState({mouseEnterEquipage: {}})
  }

  render() {
    return (
      <div className='modalEquipagesListComponent'>
        <Modal ariaHideApp={false} isOpen={this.props.modalIsOpen}>
          <button aria-label='Close' className='close' onClick={this.handleClickCloseButton} type='button'>
            <span dangerouslySetInnerHTML={{__html: '&times'}} />
          </button>
          {this.state.isLoading ? (
            <Loading />
          ) : (
            <div className='equipages-list'>
              <table className='table table-bordered'>
                <tbody>
                  <tr className='modal-equipage-line' onClick={this.handleClickEmptyEquipage} onMouseEnter={this.handleMouseLeaveEquipage}>
                    <td colSpan='2'>{'なし'}</td>
                  </tr>
                  {this.state.equipages.map((equipage) =>
                    <ModalEquipage equipage={equipage} key={equipage.id} mouseEnterEquipage={this.state.mouseEnterEquipage} onClickEquipage={this.handleClickEquipage} onMouseEnterEquipage={this.handleMouseEnterEquipage} />
                  )}
                </tbody>
              </table>
              {Object.keys(this.state.mouseEnterEquipage).length > 0 ? (
                <div className='panel panel-default'>
                  <div className='panel-body'>
                    <EquipageInformation equipage={this.state.mouseEnterEquipage} />
                  </div>
                </div>
              ) : (
                null
              )}
            </div>
          )}
        </Modal>
      </div>
    )
  }
}

ModalEquipagesList.propTypes = {
  part: PropTypes.string.isRequired,
  handleClickCloseButton: PropTypes.func.isRequired,
  onSelectEquipage: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired
}
