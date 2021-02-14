import { TestScheduler } from "jest";

import React from 'react'
import {shallow} from 'enzyme'
import {LoginPage} from '../../component/LoginPage'

test('should render LoginPage component correctly', () => {
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot()
})


test('should call startLogin on the button click', () => {
        const startLogin = jest.fn()
        const wrapper = shallow(<LoginPage startLogin ={startLogin}/>)
        wrapper.find('#login').simulate('click')
        expect(startLogin).toHaveBeenCalled()
})
