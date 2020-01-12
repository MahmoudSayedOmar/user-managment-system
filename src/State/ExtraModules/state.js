export interface ModulesState {
  modules: Array;
  loading: Boolean;
  errorMessage: String;
}

export const modulesInitialState: ModulesState = {
  modules: [],
  loading: 0,
  errorMessage: ""
};
