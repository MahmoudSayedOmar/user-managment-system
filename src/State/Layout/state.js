import { companyDto } from "../../proxy/dtos/company";

export interface companyState {
  company: companyDto;
}

export const compnayInitialState: companyState = {
  company: null
};
