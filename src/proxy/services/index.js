import { AuthProxyService } from "./auth-proxy.service";
import { CorporateService } from "./corporate.service";
import { DefaultApplicationsProxyService } from "./default-applications-proxy-service";
import { ApplicationsPortofoliosProxyService } from "./application-portofolio.service";
import { UserTypesService } from './user-types.service'

const authProxyService = new AuthProxyService();
const corporateService = new CorporateService();
const defaultApplicationsProxyService = new DefaultApplicationsProxyService();
const applicationsPortofoliosProxyService = new ApplicationsPortofoliosProxyService();
const userTypesService = new UserTypesService();

export { authProxyService, corporateService, defaultApplicationsProxyService, applicationsPortofoliosProxyService, userTypesService };
