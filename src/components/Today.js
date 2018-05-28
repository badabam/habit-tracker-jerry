import React, { Component } from 'react'
import { css } from 'emotion'
import moment from 'moment'

import habits from '../data/habits'
import globalStyles from '../styles/global'
import HabitList from './HabitList'
import DateSwitch from './DateSwitch'

// inject global styles
globalStyles()

class Today extends Component {
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
      history: { ...this.state.history, [this.currentDate]: updatedEntries },
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
    const dateSwitchStyles = css`
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
    `

    return (
      <React.Fragment>
        <DateSwitch
          className={dateSwitchStyles}
          text={this.currentDate}
          onLeft={this.moveDayLeft}
          onRight={this.moveDayRight}
          isToday={this.state.dayOffset === 0}
        />
        <HabitList
          headline="Gut"
          habits={this.state.habits.filter(habit => habit.category === 'good')}
          data={this.state.history[this.currentDate]}
          onToggle={this.toggleHabit}
          onIncrease={this.increaseCount}
          onDecrease={this.decreaseCount}
        />
        <HabitList
          headline="Schlecht"
          habits={this.state.habits.filter(habit => habit.category === 'bad')}
          data={this.state.history[this.currentDate]}
          onToggle={this.toggleHabit}
          onIncrease={this.increaseCount}
          onDecrease={this.decreaseCount}
        />
      </React.Fragment>
    )
  }
}
export default Today
