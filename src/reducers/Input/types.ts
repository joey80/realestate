import { INPUT } from 'src/actions/constants';

interface Action {
  errorName: keyof SearchLocation;
  stateName: keyof SearchLocation;
  stateValue: string;
  type: keyof typeof INPUT;
}

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

interface InitialState {
  errors: Errors;
  searchLocation: SearchLocation;
}

export type { Action, InitialState, SearchLocation };
