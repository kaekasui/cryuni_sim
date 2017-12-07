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
            {this.props.heroAbilities.length? (
              <tr>
                <th className='intimacy_lavel'>{'レベル'}</th>
                <th className='attached_abilities'>{'アビリティ'}</th>
              </tr>
            ) : (
              null
            )}
            {this.props.heroAbilities.map((ability) => (
              <tr className={(ability.intimacy_level_from <= this.props.intimacy && this.props.intimacy <= ability.intimacy_level_to) ? 'active-ability' : ''} key={ability.id}>
                <td>{ability.intimacy_level}</td>
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
  intimacy: PropTypes.string
}
