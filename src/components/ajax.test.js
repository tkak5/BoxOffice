import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Ajax from './ajax';

it('renders without crashing', () => {
  shallow(<Ajax />);
});
