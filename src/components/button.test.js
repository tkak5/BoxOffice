import React from 'react';
import { shallow, mount } from 'enzyme';
import Button  from './button';

it('renders without crashing', () => {
  shallow(<Button />);
});


it('simulates click events', () => {
  const onButtonClick = jest.fn();
  const wrapper = mount((
    <Button handleSort={onButtonClick} />
    ));
  wrapper.find('button').simulate('click');
  expect(onButtonClick.mock.calls.length).toBe(1);
});

it('simulates click events on shallow', () => {
  const onButtonClick = jest.fn();
  const wrapper = shallow(<Button handleSort={onButtonClick} />);
  wrapper.find('button').simulate('click');
  expect(onButtonClick.mock.calls.length).toBe(1);
});
