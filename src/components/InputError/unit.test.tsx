import { mount } from 'enzyme';
import InputError from './index';

describe('InputError', () => {
  it('renders correctly', () => {
    mount(<InputError error={false} errorMessage='this is the error message' />);
  });

  // doesnt show error message by default
  // shows error message if error state
});
