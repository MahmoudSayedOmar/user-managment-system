import { CompanyDto } from "../../proxy/dtos/company";

export interface companiesState {
  companies: CompanyDto[];
}

export const companiesInitialState: companiesState = {
  companies: []
};
