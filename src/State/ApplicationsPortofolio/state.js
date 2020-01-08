import { ApplicationsPortofolioDto } from "../../proxy/dtos/applicationportofolio";

export interface applicationsPortofoliosState {
  applicationsPortofolios: ApplicationsPortofolioDto[];
  selectedApplicationsPortofolioId: Number;
  isLoaded: Boolean;
}

export const applicationsPortofoliosInitialState: applicationsPortofoliosState = {
  applicationsPortofolios: [],
  selectedApplicationPortofolioId: undefined,
  isLoaded: false
};
