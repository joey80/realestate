import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loader from './Loader';

configure({ adapter: new Adapter() });

describe('<Loader />', () => {
  it('renders correctly', () => {
    shallow(<Loader />);
  });
});

