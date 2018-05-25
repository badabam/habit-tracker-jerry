import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ToggleButton from '../src/components/ToggleButton'
import CounterButton from '../src/components/CounterButton'
import DateSwitch from '../src/components/DateSwitch'
import HabitList from '../src/components/HabitList'

storiesOf('ToggleButton', module)
  .add('unchecked', () => (
    <ToggleButton
      onClick={action('clicked')}
      checked={false}
      text={'Sport gemacht'}
    />
  ))
  .add('checked', () => (
    <ToggleButton onClick={action('clicked')} checked={true} text={'Gelernt'} />
  ))

storiesOf('CounterButton', module)
  .add('default', () => (
    <CounterButton
      text={'Sport gemacht'}
      count={0}
      onIncrease={action('increase')}
      onDecrease={action('decrease')}
    />
  ))
  .add('counted', () => (
    <CounterButton
      text={'Sport gemacht'}
      count={3}
      onIncrease={action('increase')}
      onDecrease={action('decrease')}
    />
  ))

storiesOf('DateSwitch', module).add('default', () => (
  <DateSwitch
    text={'25.5.2018'}
    onLeft={action('left')}
    onRight={action('right')}
  />
))

storiesOf('HabitList', module).add('counted', () => (
  <HabitList
    headline="Gut"
    habits={[
      { text: 'A button', id: '0', checked: false },
      { text: 'Another button', id: '1', count: 0 },
      { text: 'A third button', id: '2', count: 3 },
    ]}
    onToggle={action('toggle')}
    onIncrease={action('increase')}
    onDecrease={action('decrease')}
  />
))
