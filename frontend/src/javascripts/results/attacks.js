import React from 'react'
import PropTypes from 'prop-types'

import Attack from './attack'

export default class Attacks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      monsterAttack: 0,   // 対魔獣攻撃力
      ahitoAttack: 0,     // 対亜人攻撃力
      eidolonAttack: 0,   // 対幻獣攻撃力
      inorganicAttack: 0, // 対無機物攻撃力
      demonAttack: 0,     // 対悪魔攻撃力
      dragonAttack: 0,    // 対竜族攻撃力
      divineAttack: 0,    // 対神族攻撃力
      crystalAttack: 0,   // 対晶魔攻撃力
      jikokuAttack: 0,    // 対光輪龍攻撃力
      bishamonAttack: 0,  // 対究極龍攻撃力
      koumokuAttack: 0,   // 対灼炎龍攻撃力
      zouchoAttack: 0     // 対氷獄龍攻撃力
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        monsterAttack: this.totalCalculator(nextProps, '対魔獣攻撃力'),
        ahitoAttack: this.totalCalculator(nextProps, '対亜人攻撃力'),
        eidolonAttack: this.totalCalculator(nextProps, '対幻獣攻撃力'),
        inorganicAttack: this.totalCalculator(nextProps, '対無機物攻撃力'),
        demonAttack: this.totalCalculator(nextProps, '対悪魔攻撃力'),
        dragonAttack: this.totalCalculator(nextProps, '対竜族攻撃力'),
        divineAttack: this.totalCalculator(nextProps, '対神族攻撃力'),
        crystalAttack: this.totalCalculator(nextProps, '対晶魔攻撃力'),
        jikokuAttack: this.totalCalculator(nextProps, '対光輪龍攻撃力'),
        bishamonAttack: this.totalCalculator(nextProps, '対究極龍攻撃力'),
        koumokuAttack: this.totalCalculator(nextProps, '対灼炎龍攻撃力'),
        zouchoAttack: this.totalCalculator(nextProps, '対氷獄龍攻撃力')
      }
    )
  }

  totalCalculator(nextProps, targetAbilityName) {
    let vipScore = this.totalCalculatorByAbilityName(nextProps.vipAbilities, targetAbilityName)
    let heroScore = this.totalCalculatorByAbilityName(nextProps.heroAbilities, targetAbilityName)
    let coreScore = this.totalCalculatorByAbilityName(nextProps.coreAbilities, targetAbilityName)
    let equipageScore = this.totalCalculatorByAbilityName(nextProps.equipageAbilities, targetAbilityName)
    console.log(nextProps.equipageAbilities)
    return vipScore + heroScore + coreScore + equipageScore
  }

  totalCalculatorByAbilityName(abilities, targetAbilityName) {
    let totalScore = 0
    abilities.forEach((ability) => {
      if (ability.ability_name == targetAbilityName) {
        totalScore += Number(ability.score)
      }
    })
    return totalScore
  }

  render() {
    return (
      <div className='attacksComponent'>
        <Attack abilityName={'対亜人攻撃力'} score={this.state.monsterAttack + this.state.ahitoAttack} />
        <Attack abilityName={'対幻獣攻撃力'} score={this.state.monsterAttack + this.state.eidolonAttack} />
        <Attack abilityName={'対無機物攻撃力'} score={this.state.monsterAttack + this.state.inorganicAttack} />
        <Attack abilityName={'対悪魔攻撃力'} score={this.state.monsterAttack + this.state.demonAttack} />
        <Attack abilityName={'対竜族攻撃力'} score={this.state.monsterAttack + this.state.dragonAttack} />
        <Attack abilityName={'対神族攻撃力'} score={this.state.monsterAttack + this.state.divineAttack} />
        <Attack abilityName={'対晶魔攻撃力'} score={this.state.monsterAttack + this.state.crystalAttack} />
        <Attack abilityName={'対光輪龍攻撃力'} score={this.state.monsterAttack + this.state.jikokuAttack} />
        <Attack abilityName={'対究極龍攻撃力'} score={this.state.monsterAttack + this.state.bishamonAttack} />
        <Attack abilityName={'対灼炎龍攻撃力'} score={this.state.monsterAttack + this.state.koumokuAttack} />
        <Attack abilityName={'対氷獄龍攻撃力'} score={this.state.monsterAttack + this.state.zouchoAttack} />
        <div className='clear' />
      </div>
    )
  }
}

Attacks.propTypes = {
  vipAbilities: PropTypes.array.isRequired,
  heroAbilities: PropTypes.array.isRequired,
  coreAbilities: PropTypes.array.isRequired,
  equipageAbilities: PropTypes.array.isRequired
}
