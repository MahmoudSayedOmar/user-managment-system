import { CompaniesDto } from "../../proxy";

export interface companiesState {
  companies: CompaniesDto;
}

export const companiesInitialState: companiesState = {
  //company: null
  companies: []
};
