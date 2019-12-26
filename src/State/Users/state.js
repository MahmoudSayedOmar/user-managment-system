import { usersDto } from "../../proxy/dtos/user";

export interface usersState {
  users: usersDto;
}

export const usersInitialState: usersState = {
  //company: null
  users: [
    {
      key: "1",
      userFirstName: "Peter",
      userMiddleName: "Atef",
      userLastName: "Tawfik",
      userValidationType: "sms",
      userEmail: "peter.tawfik@medafinvestment.com",
      userDOB: "19-19-2019",
      userPhoto: "String",
      userGender: "Male",
      userMobile: "0122456456456",
      userDefaultLanguage: "Eng",
      userTypes: ["one", "two"],
      userRoles: ["ABC", "EFG"],
      actions: { id: "1", active: true }
    }
  ]
};
