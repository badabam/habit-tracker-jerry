import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ToggleButton from '../src/components/ToggleButton'
import CounterButton from '../src/components/CounterButton'

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
