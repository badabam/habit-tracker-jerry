import { shallow, mount } from 'enzyme'
import React from 'react'
import toJson from 'enzyme-to-json'
import DateSwitch from './DateSwitch'

describe('DateSwitch', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<DateSwitch text="Foo" />)
  })

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
