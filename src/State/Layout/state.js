import { companiesDto } from "../../proxy/dtos/company";

export interface companiesState {
  companies: companiesDto;
}

export const companiesInitialState: companiesState = {
  //company: null
  companies: [
    {
      key: "1",
      name: "Company 1",
      phoneNumber: 32,
      address: "10 Downing Street",
      actions: 1
    },
    {
      key: "2",
      name: "Company 2",
      phoneNumber: 432343242,
      address: "10 Downing Street",
      actions: "2"
    }
  ]
};
