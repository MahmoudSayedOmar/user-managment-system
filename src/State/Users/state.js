import { userDto } from "../../proxy/dtos/user";

export interface usersState {
  users: userDto[];
}

export const usersInitialState: usersState = {
  //company: null

  users: []
};
