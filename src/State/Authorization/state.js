import { TokenDto } from "../../proxy/dtos";
export interface AuthorizationState {
  username: string;
  token: TokenDto;
  isLoggedIn: boolean;
  isRegistered: boolean;
  errorMessage: string;
  loading: boolean;
}

export const AuthorizationInitialState: AuthorizationState = {
  username: "",
  token: null,
  isLoggedIn: false,
  isRegistered: false,
  errorMessage: "",
  loading: false
};
