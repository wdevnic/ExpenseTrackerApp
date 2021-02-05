import React from 'react'
import NotFoundPage from '../../component/NotFoundPage'
import {shallow} from 'enzyme'

test('should render dashboard page', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
})