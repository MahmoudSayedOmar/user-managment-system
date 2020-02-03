import { userDto } from "../../proxy/dtos/user";

export interface usersState {
  users: userDto[];
  toEditUser: userDto;
  loading: boolean;
  userSelectedAppPort: {};
  // isShow:Boolean
}

export const usersInitialState: usersState = {
  //company: null

  users: [],
  toEditUser: {},
  loading: false,
  userSelectedAppPort: {}
};
