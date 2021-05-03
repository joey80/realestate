import { mount } from 'enzyme';
import Select from './index';

describe('Select', () => {
  it('renders correctly', () => {
    mount(<Select options={<option value='first option'>first option</option>} />);
  });

  // shows the right amount of options
  // shows error class if error
  // doesnt show error class by default
});
