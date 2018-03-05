import React from 'react';
import { shallow } from 'enzyme';
//import toJson from 'enzyme-to-json';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render Header corrently',()=>{
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    //expect(toJson(wrapper)).toMatchSnapshot();
    
    // expect(wrapper.find('h1').text()).toBe('Expensify');

//  const renderer = new ReactShallowRenderer();
//  renderer.render(<Header />);
//  expect(renderer.getRenderOutput()).toMatchSnapshot();
});