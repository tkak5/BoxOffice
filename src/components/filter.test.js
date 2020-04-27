import React from 'react';
import { shallow } from 'enzyme';
import Filter from './filter';
import { Data } from './test-data/data';

it('renders without crashing', () => {
  shallow(<Filter filterQuery={Data["2019"]["movies"]}/>);
});
