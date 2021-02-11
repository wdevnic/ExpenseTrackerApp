import Enzyme from 'enzyme'
import Adaptor from 'enzyme-adapter-react-16'
import "jest-enzyme"
require('dotenv').config({path: '.env.test'})

Enzyme.configure({
    adapter: new Adaptor()
})