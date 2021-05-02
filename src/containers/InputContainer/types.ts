import { SearchLocation } from 'src/reducers/Input/types';

interface InputContainerType {
  errorMessage: string;
  label: keyof SearchLocation;
  maxLength?: number;
  name: string;
}

export type { InputContainerType };
