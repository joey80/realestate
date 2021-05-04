import { mount } from 'enzyme';
import Input from './index';

describe('Input', () => {
  const wrapper = mount(<Input />);

  it('renders correctly', () => {
    mount(<Input />);
  });

  it('does not have an error class by default', () => {
    expect(wrapper.find('.input__field--error').exists()).toBeFalsy();
  });

  it('does have an error class if there is an error', () => {
    wrapper.setProps({ error: true });
    expect(wrapper.find('.input__field--error').exists()).toBeTruthy();
  });
});
