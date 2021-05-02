import { SearchLocation } from 'src/reducers/Input/types';

interface SelectContainerType {
  defaultValue: string;
  errorMessage: string;
  label: keyof SearchLocation;
  value: string;
}

export type { SelectContainerType };
