import { INPUT } from 'src/actions/constants';

interface Errors {
  city: boolean;
  state: boolean;
  streetAddress: boolean;
  zipCode: boolean;
}

interface SearchLocation {
  city: string;
  state: string;
  streetAddress: string;
  zipCode: string;
}

interface InputAction {
  errorName: keyof SearchLocation;
  stateName: keyof SearchLocation;
  stateValue: string;
  type: keyof typeof INPUT;
}

interface InputInitialState {
  errors: Errors;
  searchLocation: SearchLocation;
}

type InputReducer = (
  state: InputInitialState | undefined,
  action: InputAction
) => InputInitialState;

export type { InputAction, InputInitialState, InputReducer, SearchLocation };
