import React, { Component } from 'react'

import habits from './data/habits'
import globalStyles from './styles/global'
import HabitList from './components/HabitList'
import DateSwitch from './components/DateSwitch'

// inject global styles
globalStyles()

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      habits: habits,
      currentDate: null,
      history: {},
    }
  }

  updateHistory(id, updateFunction) {
    const oldEntries = this.state.history[this.state.currentDate] || {}
    const oldValue = oldEntries[id]

    const updatedEntries = {
      ...oldEntries,
      [id]: updateFunction(oldValue),
    }
    this.setState({
      history: {
        ...this.state.history,
        [this.state.currentDate]: updatedEntries,
      },
    })
  }

  toggleHabit(id) {
    this.updateHistory(id, oldValue => !oldValue)
  }

  increaseCount(id) {
    this.updateHistory(id, oldValue => (oldValue == null ? 1 : oldValue + 1))
  }

  decreaseCount(id) {
    this.updateHistory(
      id,
      oldValue => (oldValue == null || oldValue === 0 ? 0 : oldValue - 1)
    )
  }

  render() {
    return (
      <React.Fragment>
        <DateSwitch onUpdate={date => this.setState({ currentDate: date })} />
        <HabitList
          headline="Gut"
          habits={this.state.habits.filter(habit => habit.category === 'good')}
          data={this.state.history[this.state.currentDate]}
          onToggle={id => this.toggleHabit(id)}
          onIncrease={id => this.increaseCount(id)}
          onDecrease={id => this.decreaseCount(id)}
        />
        <HabitList
          headline="Schlecht"
          habits={this.state.habits.filter(habit => habit.category === 'bad')}
          data={this.state.history[this.state.currentDate]}
          onToggle={id => this.toggleHabit(id)}
          onIncrease={id => this.increaseCount(id)}
          onDecrease={id => this.decreaseCount(id)}
        />
      </React.Fragment>
    )
  }
}

export default App
