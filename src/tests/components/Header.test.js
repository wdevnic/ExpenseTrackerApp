//import ReactShallowRenderer from 'react-test-renderer/shallow'
import React from 'React'
import Header from '../../component/Header'
//import toJSON from 'enzyme-to-json' // didnt change anything, seems like new version has this built in 
import {shallow} from 'enzyme'

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot();



    //expect(wrapper.find('h1').text()).toBe('Expensify')
   /*  const renderer = new ReactShallowRenderer();
    renderer.render(<Header />)
    expect(renderer.getRenderOutput()).toMatchSnapshot(); */
});



