import { mount } from 'enzyme';
import Input from './index';

describe('Input', () => {
  it('renders correctly', () => {
    mount(<Input />);
  });

  // has error class if error state
  // does not have an error class by default
});
