import { RESULTS } from 'src/actions/constants';

interface ResultsAction {
  newResults: ZillowResults;
  type: keyof typeof RESULTS;
}

interface ResultsInitialState {
  searchResults: SearchResults;
}

type ResultsReducer = (
  state: ResultsInitialState | undefined,
  action: ResultsAction
) => ResultsInitialState;

interface SearchResults {
  properties: ZillowResults | null;
}

interface ZillowAddress {
  city: string;
  lat: string;
  long: string;
  state: string;
  street: string;
  zip: string;
}

interface ZillowProperty {
  bathrooms: string;
  bedrooms: string;
  sqft: string;
  type: string;
  value: string;
}

interface ZillowResults {
  address: ZillowAddress;
  comparablesLink: string;
  homeDetailsLink: string;
  mapThisHomeLink: string;
  property: ZillowProperty;
  zpid: string;
}

export type { ResultsReducer };
