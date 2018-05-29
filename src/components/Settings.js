import React, { Component } from 'react'
import HabitForm from './HabitForm'

export default class Settings extends Component {
  render() {
    return (
      <div>
        <h1>Settings</h1>
        <HabitForm onCreateHabit={this.props.onCreateHabit} />
      </div>
    )
  }
}
