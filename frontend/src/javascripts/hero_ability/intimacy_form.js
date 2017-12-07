import React from 'react'
import PropTypes from 'prop-types'

export default class IntimacyForm extends React.Component {
  constructor(props) {
    super(props)
    //this.handleClickHeroImage = this.handleClickHeroImage.bind(this)
    this.handleChangeIntimacy = this.handleChangeIntimacy.bind(this)
  }

  handleChangeIntimacy(e) {
    //TODO: レベルを入力
    this.props.handleSetIntimacy(e.target.value)
  }
  //handleClickHeroImage() {
  //  this.getHeroAbilities()
  //  this.props.handleLoadHero(this.props.hero)
  //}

  //getHeroAbilities() {
  //  fetch('api/heros/' + this.props.hero.id + '/hero_abilities')
  //    .then((res) => res.json())
  //    .then((res) => {
  //      this.props.handleLoadHeroAbilities(res)
  //    })
  //    .catch((error) => {
  //      console.error(error)
  //    })
  //}

  render() {
    return (
      <div className='intimacyFormComponent'>
        {'英雄親密度 レベル'}
        <input className='form-control' onChange={this.handleChangeIntimacy} type='number' />
      </div>
    )
  }
}

IntimacyForm.propTypes = {
  //hero: PropTypes.object.isRequired,
  handleSetIntimacy: PropTypes.func.isRequired
  //handleLoadHero: PropTypes.func.isRequired,
  //handleLoadHeroAbilities: PropTypes.func.isRequired
}
