import { AuthProxyService } from "./auth-proxy.service";
import { CorporateService } from "./corporate.service";
import { DefaultApplicationsProxyService } from "./default-applications-proxy-service";
import { ApplicationsPortofoliosProxyService } from "./application-portofolio.service";
import { ModulesProxyService } from "./modules-service";
import { SubmitCodeProxyService } from "./submit-code-proxy-service";
import { UserTypesService } from "./user-types.service";
import { RolesProxyService } from "./roles.service";

const authProxyService = new AuthProxyService();
const submitCodeProxyService = new SubmitCodeProxyService();
const corporateService = new CorporateService();
const defaultApplicationsProxyService = new DefaultApplicationsProxyService();
const applicationsPortofoliosProxyService = new ApplicationsPortofoliosProxyService();
const modulesProxyService = new ModulesProxyService();
const userTypesService = new UserTypesService();
const rolesProxyService = new RolesProxyService();

export {
  authProxyService,
  corporateService,
  defaultApplicationsProxyService,
  applicationsPortofoliosProxyService,
  userTypesService,
  modulesProxyService,
  submitCodeProxyService,
  rolesProxyService
};
