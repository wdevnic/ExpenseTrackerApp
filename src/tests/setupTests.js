import Enzyme from 'enzyme'
import Adaptor from 'enzyme-adapter-react-16'
import "jest-enzyme"

Enzyme.configure({
    adapter: new Adaptor()
})