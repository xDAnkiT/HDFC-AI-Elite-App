import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import YoutubeScreen from '../../src/Components/YoutubeScreen';

import renderer from 'react-test-renderer';

describe('Rendering Twitter login component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<YoutubeScreen />)
  })


  it('renders correctly', () => {
    const tree = renderer.create(
      <YoutubeScreen />
    );
  });
})



