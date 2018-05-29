import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import moment from 'moment'

import globalStyles from './styles/global'
import habits from './data/habits'

import Today from './components/Today'
import History from './components/History'
import Settings from './components/Settings'
import Navigation from './components/Navigation'

globalStyles()

class App extends Component {
  state = {
    habits: habits,
    dayOffset: 0,
    history: {},
  }

  updateHistory(id, updateFunction) {
    const oldEntries = this.state.history[this.currentDate] || {}
    const oldValue = oldEntries[id]

    const updatedEntries = {
      ...oldEntries,
      [id]: updateFunction(oldValue),
    }
    this.setState({
      history: {
        ...this.state.history,
        [this.currentDate]: updatedEntries,
      },
    })
  }

  toggleHabit = id => {
    this.updateHistory(id, oldValue => !oldValue)
  }

  increaseCount = id => {
    this.updateHistory(id, oldValue => (oldValue == null ? 1 : oldValue + 1))
  }

  decreaseCount = id => {
    this.updateHistory(
      id,
      oldValue => (oldValue == null || oldValue === 0 ? 0 : oldValue - 1)
    )
  }

  handleCreateHabit = habit => {
    this.setState({
      habits: [...this.state.habits, habit],
    })
  }

  get currentDate() {
    return moment()
      .add(this.state.dayOffset, 'days')
      .format('DD.MM.YYYY')
  }

  moveDayLeft = () => {
    this.setState(state => ({
      dayOffset: state.dayOffset - 1,
    }))
  }

  moveDayRight = () => {
    this.setState({
      dayOffset: this.state.dayOffset + 1,
    })
  }

  render() {
    return (
      <Router>
        <section>
          <Route
            exact
            path="/"
            render={() => (
              <Today
                habits={this.state.habits}
                data={this.state.history}
                dayOffset={this.state.dayOffset}
                currentDate={this.currentDate}
                moveDayLeft={this.moveDayLeft}
                moveDayRight={this.moveDayRight}
                toggleHabit={this.toggleHabit}
                increaseCount={this.increaseCount}
                decreaseCount={this.decreaseCount}
              />
            )}
          />
          <Route
            path="/history"
            render={() => (
              <History habits={this.state.habits} data={this.state.history} />
            )}
          />
          <Route
            path="/settings"
            render={() => <Settings onCreateHabit={this.handleCreateHabit} />}
          />

          <Navigation />
        </section>
      </Router>
    )
  }
}
export default App
