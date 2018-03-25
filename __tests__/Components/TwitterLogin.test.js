import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import TwitterLogin from '../../src/Components/TwitterLogin';

import renderer from 'react-test-renderer';

describe('Rendering Twitter login component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<TwitterLogin />)
  })
  
  it('should render 2 <TextInput/>', () =>{
    expect(wrapper.find('TextInput')).toHaveLength(2)
  });
  
  it('should render 1 <TouchableOpacity/>', () =>{
    expect(wrapper.find('TouchableOpacity')).toHaveLength(1)
  });



  it('renders correctly', () => {
    const tree = renderer.create(
      <TwitterLogin />
    );
  });
})
