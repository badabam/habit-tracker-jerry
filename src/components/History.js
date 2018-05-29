import React, { Component } from 'react'

export default class History extends Component {
  render() {
    const { data: history, habits } = this.props

    return (
      <div>
        {Object.keys(history).map(date => {
          const dateHistory = history[date]
          return (
            <div>
              <h4>{date}</h4>
              <ul>
                {Object.keys(dateHistory).map(uid => {
                  const habitName = habits.find(habit => habit.id === uid).text
                  const value = dateHistory[uid]
                  return <li>{`${habitName}: ${value}`}</li>
                })}
              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}
