import React from 'react'
import {shallow} from 'enzyme'
import LoadingPage from '../../component/LoadingPage'


test('should rending loading page', () => {
    const wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot()
})