import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import SplashScreen from '../../src/Components/SplashScreen';

describe('Rendering SplashScreen component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<SplashScreen />)
  })

  it('Sholud render a single view', () => {
    expect(wrapper.find('View')).toHaveLength(1)
  });
})