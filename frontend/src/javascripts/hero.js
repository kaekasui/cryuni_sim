import React from 'react'
import { render } from 'react-dom'

export default class Hero extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="HeroComponent">
        { this.props.hero.name }
      </div>
    )
  }
}
