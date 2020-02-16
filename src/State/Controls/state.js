export interface controlState {
  controls: Array;
  loading: Boolean;
  errorMessage: String;
}

export const controlInitialState: controlState = {
  controls: [],
  loading: 0,
  errorMessage: ""
};
