import { RoleDto } from "../../proxy/dtos/role";

export interface rolesState {
  roles: RoleDto[];
  isLoaded: Boolean;
}

export const rolesInitialState: rolesState = {
  roles: [],
  isLoaded: true
};
