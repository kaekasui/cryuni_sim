import React from 'react'
import PropTypes from 'prop-types'

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedGradeLevel: this.props.selectedGradeLevel
    }
    this.handleChangeGradeLevel = this.handleChangeGradeLevel.bind(this)
  }

  handleChangeGradeLevel(e) {
    this.setState({selectedGradeLevel: e.target.value})
  }

  render() {
    return (
      <div className='gradeFormComponent'>
        <div className='btn-group' data-toggle='buttons'>
          {this.props.grades.map((grade) => (
            <label className={'btn btn-default ' + (this.state.selectedGradeLevel == grade.level ? 'active' : '')} id={'level-' + grade.level} key={grade.id}>
              <input autoComplete='off' name='grade-level' onChange={this.handleChangeGradeLevel} type='radio' value={grade.level} />
              {grade.name}
            </label>
          ))}
        </div>
      </div>
    )
  }
}

GradeForm.propTypes = {
  selectedGradeLevel: PropTypes.number.isRequired,
  grades: PropTypes.array.isRequired
}
