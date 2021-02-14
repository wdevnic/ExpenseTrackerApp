//import ReactShallowRenderer from 'react-test-renderer/shallow'
import React from 'React'
import {Header} from '../../component/Header'
//import toJSON from 'enzyme-to-json' // didnt change anything, seems like new version has this built in 
import {shallow} from 'enzyme'

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>)
    expect(wrapper).toMatchSnapshot()
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn()
    const wrapper = shallow(<Header startLogout={startLogout}/>)
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()

})


