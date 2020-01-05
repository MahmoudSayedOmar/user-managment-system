import { usersDto } from "../../proxy/dtos/user";

export interface usersState {
  users: usersDto;
}

export const usersInitialState: usersState = {
  //company: null

  users: [
    {
      id: "1",
      fName: "Peter",
      mName: "Atef",
      lName: "Tawfik",
      validateBy: "sms",
      email: "peter.tawfik@medafinvestment.com",
      dateOfBirth: "12/10/2019",
      photo: "String",
      sex: "female",
      mobileNumber: "0122456456456",
      defaultLanguage: "english",
      corporate: "1",

      applications: [
        { "1": [{ usertype1: ["role1", "role2"] }] },
        { "2": [{ usertype2: ["role1", "role2"] }] },
        { "3": [{ usertype3: ["role1", "role2"] }] }
      ],

      actions: { id: "1", active: true }
    },
    {
      id: "2",
      fName: "Peterddd",
      mName: "Atefee",
      lName: "Tawfikff",
      validateBy: "sms",
      email: "peter.tawfik@medafinvestment.com",
      dateOfBirth: "10/10/2019",
      photo: "String",
      sex: "male",
      mobileNumber: "0122456456456",
      defaultLanguage: "arabic",
      corporate: "2",

      applications: [
        { "1": [{ usertype1: ["role1", "role2"] }] },
        { "2": [{ usertype2: ["role1", "role2"] }] },
        { "3": [{ usertype3: ["role1", "role2"] }] }
      ],
      actions: { id: "2", active: false }
    }
  ]
};
