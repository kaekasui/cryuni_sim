import React from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import AttachedAbilitiesTable from './../attached_abilities_table'

export default class GradeTabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0
    }
    this.handleSelectGrade = this.handleSelectGrade.bind(this)
  }

  handleSelectGrade(index, _last) {
    this.setState({selectedIndex: index})
  }

  render() {
    return (
      <div className='gradeTabsComponent'>
        <Tabs onSelect={this.handleSelectGrade} selectedIndex={this.state.selectedIndex}>
          <TabList>
            {this.props.grades.map((grade) => (
              <Tab>{grade.name}</Tab>
            ))}
          </TabList>
          {this.props.grades.map((grade) => (
            <TabPanel>
              <AttachedAbilitiesTable abilities={grade.attached_equipage_abilities} />
            </TabPanel>
          ))}
        </Tabs>
      </div>
    )
  }
}

GradeTabs.propTypes = {
  grades: PropTypes.object.isRequired
}
