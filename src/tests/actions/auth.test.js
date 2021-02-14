import React from 'react'
import {shallow} from 'enzyme'
import {logout, login} from '../../actions/auth'

test('should setup login object', () => {
    const uid = "123abc"
    const action = login(uid)
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('should setup logout object', () => {
    const action = logout()
    expect(action).toEqual({
        type: "LOGOUT"
    })
})