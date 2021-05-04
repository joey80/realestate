import { mount } from 'enzyme';
import InputError from './index';

describe('InputError', () => {
  const defaultProps = {
    error: false,
    errorMessage: 'This is the error message',
  };

  const wrapper = mount(<InputError {...defaultProps} />);

  it('renders correctly', () => {
    mount(<InputError {...defaultProps} />);
  });

  it('does not show an error message by default', () => {
    expect(wrapper.find('.inputError__message').text()).toBe('');
  });

  it('does show an error message if there is an error', () => {
    wrapper.setProps({ error: true });
    expect(wrapper.find('.inputError__message').text()).toBe(defaultProps.errorMessage);
  });
});
