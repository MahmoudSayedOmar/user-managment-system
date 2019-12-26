import { companiesDto } from "../../proxy/dtos/company";

export interface companiesState {
  companies: companiesDto;
}

export const companiesInitialState: companiesState = {
  //company: null
  companies: [
    {
      id: "1",
      name: "Company 1",
      phoneNo: 32,
      address: "10 Downing Street",
      country: "Egypt",
      city: "Cairo",
      zip: "1175",
      registrationNo: "Reg. Number11",

      actions: { id: "1", active: true }
    },
    {
      id: "2",
      name: "Company 2",
      phoneNo: 32,
      address: "10 Downing Street",
      country: "Egypt",
      city: "Cairo",
      zip: "1175",
      registrationNo: "Reg. Number11",

      actions: { id: "2", active: false }
    }
  ]
};
