import React from 'react'
import PropTypes from 'prop-types'

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleChangeGradeLevel = this.handleChangeGradeLevel.bind(this)
  }

  handleChangeGradeLevel(e) {
    this.props.onSelectGrade(Number.parseInt(e.target.value))
  }

  render() {
    return (
      <div className='gradeFormComponent'>
        <div className='btn-group' data-toggle='buttons'>
          {this.props.grades.map((grade) => (
            <label className={'btn btn-default ' + (this.props.selectedGradeLevel == grade.level ? 'active' : '')} id={'level-' + grade.level} key={grade.id}>
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
  onSelectGrade: PropTypes.func.isRequired,
  selectedGradeLevel: PropTypes.number.isRequired,
  grades: PropTypes.array.isRequired
}
