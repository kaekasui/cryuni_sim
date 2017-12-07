import React from 'react'
import PropTypes from 'prop-types'

export default class Title extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='titleComponent'>
        <table>
          <tbody>
            <tr>
              <td className='title'>{this.props.title}</td>
              <td className='hr'><hr /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}
