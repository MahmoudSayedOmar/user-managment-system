import { companiesDto } from "../../proxy/dtos/company";

export interface companiesState {
  companies: companiesDto;
}

export const companiesInitialState: companiesState = {
  //company: null
  companies: [
    { companyName: "sharbat", companyTel: "434534534543" },
    { companyName: "sharbatdadf", companyTel: "434534534543" },
    { companyName: "sharbat", companyTel: "434534534543" }
  ]
};
