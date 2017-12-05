import React from 'react'
import PropTypes from 'prop-types'

export default class AttachedAbilities extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='attachedAbilitiesComponent'>
        <ul>
          {this.props.abilities.map((ability) => (
            <li key={ability.id}>{ability.ability_name} {ability.score} {ability.unit}</li>
          ))}
        </ul>
      </div>
    )
  }
}

AttachedAbilities.propTypes = {
  abilities: PropTypes.array.isRequired,
}
