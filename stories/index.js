import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ToggleButton from '../src/components/ToggleButton'

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
