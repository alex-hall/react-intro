import React from 'react';
import App from './App';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  var component = shallow(<App />);

  expect(component).toBeTruthy();

});
