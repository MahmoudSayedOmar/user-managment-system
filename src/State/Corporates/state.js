import { CompanyDto } from "../../proxy/dtos/company";

export interface companiesState {
  companies: CompanyDto[];
  selectedCompanyId: Number;
  selectedCompany: Object;
}

export const companiesInitialState: companiesState = {
  companies: [],
  selectedCompanyId: undefined,
  selectedCompany: {}
};
