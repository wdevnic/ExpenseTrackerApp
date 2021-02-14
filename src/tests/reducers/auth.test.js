import { TestScheduler } from 'jest'
import authReducer from '../../reducers/auth'

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: "123abc"
    }

    const state = authReducer({}, action)
    expect(state.uid).toBe(action.uid)
})

test('should clear uid on logout', () => {
    const action = {
        type: 'LOGOUT'
    }

    const state = authReducer({uid: "112233"}, action)
    expect(state).toEqual({})
})