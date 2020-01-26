import { TokenDto } from "../../proxy/dtos";
export interface AuthorizationState {
  username: string;
  token: TokenDto;
  isLoggedIn: boolean;
  isRegistered: boolean;
  errorMessage: string;
  loading: boolean;
  role: Array;
  screens: Array;
  userProfile: Object;
}

export const AuthorizationInitialState: AuthorizationState = {
  username: "",
  token: null,
  isLoggedIn: false,
  isRegistered: false,
  errorMessage: "",
  loading: false,
  role: [],
  screens: [],
  userProfile: {}
};
