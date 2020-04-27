import React from 'react';
import { shallow,mount } from 'enzyme';
import Sort from './sort';
import { Data } from './test-data/data';

const wrapper = shallow(<Sort movies={Data} />);

it('renders without crashing', () => {
  shallow(<Sort movies={Data} />);
});

it('renders Full DOM', () => {
  mount(<Sort movies={Data}/>);
});

it('components existing', () => {
  expect(wrapper).toContainMatchingElement('.component-filter');
  expect(wrapper).toContainMatchingElement('.component-button');
  expect(wrapper).toContainMatchingElement('.component-select');
  expect(wrapper).toContainMatchingElement('.component-movie');
});
