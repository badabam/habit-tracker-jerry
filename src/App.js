import React, { Component } from 'react'
import styled from 'react-emotion'
import uid from 'uid'

import HabitList from './components/HabitList'

const Grid = styled('section')`
  display: grid;
  grid-gap: 10px;
`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      habits: [
        { text: 'Sport gemacht', checked: false, id: uid(), category: 'good' },
        {
          text: 'Gesund gegessen',
          checked: false,
          id: uid(),
          category: 'good',
        },
        { text: 'Abends gelernt', checked: false, id: uid(), category: 'good' },
        {
          text: 'Im Kurs beteiligt',
          checked: false,
          id: uid(),
          category: 'good',
        },
        {
          text: 'Liter Wasser getrunken',
          count: 0,
          id: uid(),
          category: 'good',
        },
        {
          text: 'Fragen im Kurs gestellt',
          count: 0,
          id: uid(),
          category: 'good',
        },
        {
          text: 'Alkohol getrunken',
          checked: false,
          id: uid(),
          category: 'bad',
        },
        {
          text: 'Nicht-Bio-Fleisch gegessen',
          checked: false,
          id: uid(),
          category: 'bad',
        },
        { text: 'Zigaretten geraucht', count: 0, id: uid(), category: 'bad' },
      ],
    }
  }

  toggleHabit(id) {
    const allHabits = this.state.habits
    const habitIndex = allHabits.findIndex(habit => habit.id === id)
    const oldHabit = allHabits[habitIndex]

    const newHabits = [
      ...allHabits.slice(0, habitIndex),
      { ...oldHabit, checked: !oldHabit.checked },
      ...allHabits.slice(habitIndex + 1),
    ]

    this.setState({ habits: newHabits })
  }

  increaseCount(id) {
    const allHabits = this.state.habits
    const habitIndex = allHabits.findIndex(habit => habit.id === id)
    const oldHabit = allHabits[habitIndex]

    const newHabits = [
      ...allHabits.slice(0, habitIndex),
      { ...oldHabit, count: oldHabit.count + 1 },
      ...allHabits.slice(habitIndex + 1),
    ]

    this.setState({ habits: newHabits })
  }

  decreaseCount(id) {
    const allHabits = this.state.habits
    const habitIndex = allHabits.findIndex(habit => habit.id === id)
    const oldHabit = allHabits[habitIndex]

    // check if it is already 0
    if (oldHabit.count === 0) {
      return // stop here, if it is already 0
    }

    const newHabits = [
      ...allHabits.slice(0, habitIndex),
      { ...oldHabit, count: oldHabit.count - 1 },
      ...allHabits.slice(habitIndex + 1),
    ]

    this.setState({ habits: newHabits })
  }

  render() {
    return (
      <Grid>
        <HabitList
          headline="Gut"
          habits={this.state.habits.filter(habit => habit.category === 'good')}
          onToggle={id => this.toggleHabit(id)}
          onIncrease={id => this.increaseCount(id)}
          onDecrease={id => this.decreaseCount(id)}
        />
        <HabitList
          headline="Schlecht"
          habits={this.state.habits.filter(habit => habit.category === 'bad')}
          onToggle={id => this.toggleHabit(id)}
          onIncrease={id => this.increaseCount(id)}
          onDecrease={id => this.decreaseCount(id)}
        />
      </Grid>
    )
  }
}

export default App
