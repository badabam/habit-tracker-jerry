import React, { Component } from 'react'
import SwitchButton from './SwitchButton'
import uid from 'uid'
import styled from 'react-emotion'
import { Box } from 'grid-emotion'

const StyledInput = styled('input')`
  height: 40px;
  border: 1px solid #ddd;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  width: 100%;
`

const StyledButton = styled('section')`
  display: flex;
  font-family: sans-serif;
  align-items: center;
  justify-content: center;
  height: 40px;
  background: skyblue;
  border: 1px solid #ccc;
  border-radius: 4px;
`

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
      <div style={{ padding: 10 }}>
        <Box mb={2}>
          <StyledInput
            value={this.state.habitText}
            onChange={e => this.setState({ habitText: e.target.value })}
            type="text"
            placeholder="Add name here"
          />
        </Box>
        <Box mb={3}>
          <SwitchButton
            textLeft="gut"
            textRight="schlecht"
            onClick={this.onCategorySelected}
            selectedIndex={this.state.selectedCategory}
          />
        </Box>
        <Box mb={3}>
          <SwitchButton
            textLeft="Toggle"
            textRight="Counter"
            onClick={this.onTypeSelected}
            selectedIndex={this.state.selectedType}
          />
        </Box>
        <StyledButton onClick={this.onCreateHabit}>Create</StyledButton>
      </div>
    )
  }
}
