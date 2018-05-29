import React, { Component } from 'react'

export default class SwitchButton extends Component {
  render() {
    const { textLeft, textRight, onClick } = this.props
    const selectedIndex = this.props.selectedIndex || 0

    return (
      <div>
        <button
          disabled={selectedIndex === 0}
          style={{ background: selectedIndex === 0 ? '#555' : 'white' }}
          onClick={e => onClick(0)}
        >
          {textLeft}
        </button>
        <button
          disabled={selectedIndex === 1}
          style={{ background: selectedIndex === 1 ? '#555' : 'white' }}
          onClick={e => onClick(1)}
        >
          {textRight}
        </button>
      </div>
    )
  }
}
