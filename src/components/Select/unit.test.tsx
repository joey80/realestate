import { mount } from 'enzyme';
import Select from './index';

describe('Select', () => {
  const options = (
    <>
      <option value='first option'>first option</option>
      <option value='second option'>second option</option>
      <option value='third option'>third option</option>
      <option value='fourth option'>fourth option</option>
    </>
  );

  const wrapper = mount(<Select {...{ options }} />);

  it('renders correctly', () => {
    mount(<Select {...{ options }} />);
  });

  it('shows the correct amount of option items', () => {
    // 4 options passed in + 1 default value
    expect(wrapper.find('option')).toHaveLength(5);
  });

  it('does not show an error class by default', () => {
    expect(wrapper.find('.select--error').exists()).toBeFalsy();
  });

  it('does have an error class if there is an error', () => {
    wrapper.setProps({ error: true });
    expect(wrapper.find('.select--error').exists()).toBeTruthy();
  });
});
