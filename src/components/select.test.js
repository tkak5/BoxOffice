import React from 'react';
import  { shallow, mount } from 'enzyme';
import  Select from './select';
import  { Data } from './test-data/data';

const handleChange = () => {};
const wrapper = shallow(<Select  year="2019" handleChange={ handleChange } />);

it('renders without crashing', () => {
  wrapper;
});

it('existing options & select', () => {
  expect(wrapper.find({value:1999})).toExist();
  expect(wrapper.find('select')).toExist();
});

