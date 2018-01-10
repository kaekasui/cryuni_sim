import React from 'react'
import PropTypes from 'prop-types'

export default class Abilities extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='abilitiesComponent'>
        <table>
          <tbody>
            {this.props.abilities.map((ability) =>
              (<tr key={ability.id}>
                <td className='ability'>{ability.ability_name}</td>
                <td>{ability.score} {ability.unit}</td>
              </tr>)
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

Abilities.propTypes = {
  abilities: PropTypes.array.isRequired
}
