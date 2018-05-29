import React, { Component } from 'react'
import SwitchButton from './SwitchButton'
import uid from 'uid'

export default class HabitForm extends Component {
  state = {
    selectedCategory: 0,
    selectedType: 1,
    habitText: '',
  }

  onCategorySelected = index => {
    this.setState({
      selectedCategory: index,
    })
  }

  onTypeSelected = index => {
    this.setState({
      selectedType: index,
    })
  }

  onCreateHabit = () => {
    const habit = {
      text: this.state.habitText,
      id: uid(),
      type: this.state.selectedType === 0 ? 'toggle' : 'count',
      category: this.state.selectedCategory === 0 ? 'good' : 'bad',
    }
    this.props.onCreateHabit(habit)
    this.setState({
      habitText: '',
    })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.habitText}
          onChange={e => this.setState({ habitText: e.target.value })}
          type="text"
          placeholder="Add name here"
        />
        <SwitchButton
          textLeft="gut"
          textRight="schlecht"
          onClick={this.onCategorySelected}
          selectedIndex={this.state.selectedCategory}
        />
        <SwitchButton
          textLeft="Toggle"
          textRight="Counter"
          onClick={this.onTypeSelected}
          selectedIndex={this.state.selectedType}
        />
        <button onClick={this.onCreateHabit}>Create</button>
      </div>
    )
  }
}
