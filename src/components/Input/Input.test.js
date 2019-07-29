import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from './Input';

configure({ adapter: new Adapter() });

describe('Input', () => {
    const testState = {
        errors: {
            streetAddress: false
        },
        label: 'streetAddress',
        errorMessage: ''
    };

    it('Should show error message if field is empty', () => {
    });

});

//     const mockStore = configureStore();
//     const store = mockStore(testState);
//     const wrapper = mount( <Provider store={ store }><Input /></Provider> );

//     // it('should render correctly', () => {
//     //     expect(input).toMatchSnapshot();
//     // });

//     it('Should show error message if field is empty', () => {
//     });

//     it('Should hide error message if field is not empty', () => {
//     });

//     it('Should only let valid zipcodes pass', () => {
//     });

// });