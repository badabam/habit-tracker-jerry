import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import ToggleButton from './ToggleButton'

describe('ToggleButton', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<ToggleButton text="Foo" checked={false} />)
  })

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('toggles color correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
    wrapper.setProps({ checked: true })
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
