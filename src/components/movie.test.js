import React from 'react';
import { shallow } from 'enzyme';
import Movie from './movie';
import { Data } from './test-data/data';

const wrapper = shallow(<Movie movies={Data["2019"]["movies"]} max={Data["2019"]["max"]}/>);

it('renders without crashing', () => {
  wrapper;
});

it('essential elements existing', () => {
  expect(wrapper.find('.wrapper')).toExist();
  expect(wrapper.find('.rank')).toExist();
  expect(wrapper.find('.title')).toExist();
  expect(wrapper.find('.income')).toExist();
  expect(wrapper.find('.bar')).toExist();
});
