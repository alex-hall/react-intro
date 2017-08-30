import '../mount-setup';
import React from 'react';
import App from './App';
import {mount} from 'enzyme'

it('renders without crashing', () => {
    var component = mount(<App/>);

    var button = component.find('input');

    button.simulate('click');

    expect(component).toBeTruthy();

});