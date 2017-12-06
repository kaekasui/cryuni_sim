import React from 'react'
import PropTypes from 'prop-types'

import AttachedAbilities from './attached_abilities'

export default class HeroAbilities extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='heroAbilitiesComponent'>
        <table className='table table-bordered'>
          <tbody>
            {this.props.heroAbilities.map((ability) => (
              <tr key={ability.id}>
                <th>{ability.intimacy_level}</th>
                <td>
                  <AttachedAbilities abilities={ability.attached_abilities} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

HeroAbilities.propTypes = {
  heroAbilities: PropTypes.array.isRequired,
}
