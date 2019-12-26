import { companiesDto } from "../../proxy/dtos/company";

export interface companiesState {
  companies: companiesDto;
}

export const companiesInitialState: companiesState = {
  //company: null
  companies: [
  ]
};
