import { companiesDto } from "../../proxy/dtos/company";

export interface companiesState {
  companies: companiesDto;
}

export const companiesInitialState: companiesState = {
  //company: null
  companies: [
    {
      key: "1",
      corporateName: "Company 1",
      corporatePhoneNumber: 32,
      corporateAddress: "10 Downing Street",
      actions: { id: "1", active: true }
    },
    {
      key: "2",
      corporateName: "Company 2",
      corporatePhoneNumber: 432343242,
      corporateAddress: "10 Downing Street",
      actions: { id: "2", active: false }
    }
  ]
};
