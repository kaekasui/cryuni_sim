import React from 'react'
import PropTypes from 'prop-types'

export default class AttachedAbilitiesTable extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='attachedAbilitiesTableComponent'>
        <table>
          <tbody>
            {this.props.abilities.map((ability) =>
              <tr>
                <td>{ability.ability_name}</td>
                <td>{ability.score} {ability.unit}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

AttachedAbilitiesTable.propTypes = {
  abilities: PropTypes.object.isRequired
}
