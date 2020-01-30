export interface menusState {
  menus: Array;
  selectedMenuId: Number;
  isLoaded: Boolean;
}

export const menusInitialState: menusState = {
  menus: [],
  selectedMenuId: undefined,
  isLoaded: true
};
