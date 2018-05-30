import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'

import HabitList from './HabitList'
import DateSwitch from './DateSwitch'

const Scroller = styled('div')`
  overflow-y: scroll;
  height: 100%;
`

export default class TodayPage extends Component {
  render() {
    const dateSwitchStyles = css`
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
    `

    const {
      currentDate,
      moveDayLeft,
      moveDayRight,
      toggleHabit,
      increaseCount,
      decreaseCount,
      habits,
      data: history,
      dayOffset,
    } = this.props

    return (
      <React.Fragment>
        <DateSwitch
          className={dateSwitchStyles}
          text={currentDate}
          onLeft={moveDayLeft}
          onRight={moveDayRight}
          isToday={dayOffset === 0}
        />
        <Scroller>
          <HabitList
            headline="Gut"
            habits={this.props.habits.filter(
              habit => habit.category === 'good'
            )}
            data={history[currentDate]}
            onToggle={toggleHabit}
            onIncrease={increaseCount}
            onDecrease={decreaseCount}
          />
          <HabitList
            headline="Schlecht"
            habits={habits.filter(habit => habit.category === 'bad')}
            data={history[currentDate]}
            onToggle={toggleHabit}
            onIncrease={increaseCount}
            onDecrease={decreaseCount}
          />
        </Scroller>
      </React.Fragment>
    )
  }
}
