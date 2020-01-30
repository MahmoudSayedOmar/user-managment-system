export interface screenState {
  screens: Array;
  loading: Boolean;
  errorMessage: String;
}

export const screenInitialState: screenState = {
  screens: [],
  loading: 0,
  errorMessage: ""
};
