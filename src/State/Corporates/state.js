import { CompanyDto } from "../../proxy/dtos/company";

export interface companiesState {
  companies: CompanyDto[];
  selectedCompanyId:Number;
}

export const companiesInitialState: companiesState = {
  companies: [],
  selectedCompanyId:0,
};
