import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import WelcomeScreen from '../../src/Components/WelcomeScreen';

import renderer from 'react-test-renderer';

describe('Rendering Twitter login component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<WelcomeScreen />)
  })

  it('should render 2 <TouchableOpacity/>', () =>{
    expect(wrapper.find('TouchableOpacity')).toHaveLength(2)
  });

  it('should render 4 <Text/>', () =>{
    expect(wrapper.find('Text')).toHaveLength(4)
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <WelcomeScreen />
    );
  });
})




