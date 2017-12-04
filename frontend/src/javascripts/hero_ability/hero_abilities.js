import React from 'react'
import PropTypes from 'prop-types'

export default class HeroAbilities extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='heroAbilitiesComponent'>
        <table className='table table-bordered'>
          <tbody>
            {this.props.heroAbilities.map((ability) =>
              (<tr key={ability.id}>
                <th>{ability.intimacy_level_from + '〜' + ability.intimacy_level_to}</th>
                <td />
              </tr>)
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

HeroAbilities.propTypes = {
  heroAbilities: PropTypes.array.isRequired,
}
