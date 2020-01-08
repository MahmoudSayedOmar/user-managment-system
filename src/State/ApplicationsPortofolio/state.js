import { ApplicationsPortofolioDto } from "../../proxy/dtos/applicationportofolio";

export interface applicationsPortofoliosState {
  applicationsPortofolios: ApplicationsPortofolioDto[];
  selectedApplicationsPortofolioId:Number;
}

export const applicationsPortofoliosInitialState: applicationsPortofoliosState = {
    applicationsPortofolios: [],
    selectedApplicationPortofolioId:0,
};
