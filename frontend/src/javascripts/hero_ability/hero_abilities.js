import React from 'react'
import PropTypes from 'prop-types'

import AttachedAbilities from './attached_abilities'

export default class HeroAbilities extends React.Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.intimacy !== this.props.intimacy || nextProps.heroAbilities !== this.props.heroAbilities) {
      return true
    } else {
      return false
    }
  }

  componentDidUpdate() {
    for (let index in this.props.heroAbilities) {
      if (this.props.heroAbilities[index].intimacy_level_from <= this.props.intimacy && this.props.intimacy <= this.props.heroAbilities[index].intimacy_level_to) {
        this.props.handleSelectHeroAbility(this.props.heroAbilities[index])
      } // TODO: 何も入ってない場合
    }
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
  handleSelectHeroAbility: PropTypes.func.isRequired,
  heroAbilities: PropTypes.array.isRequired,
  intimacy: PropTypes.string.isRequired
}
