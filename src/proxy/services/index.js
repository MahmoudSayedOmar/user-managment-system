import { AuthProxyService } from "./auth-proxy.service";
import { CorporateService } from "./corporate.service";
import { DefaultApplicationsProxyService } from "./default-applications-proxy-service";
import { ApplicationsPortofoliosProxyService } from "./application-portofolio.service";
import { ModulesProxyService } from "./modules-service";
import { SubmitCodeProxyService } from "./submit-code-proxy-service";
import { UserTypesService } from "./user-types.service";
import { RolesProxyService } from "./roles.service";
import { MenusProxyService } from "./menu-service";
import { ScreensProxyService } from "./screen-service";
import { ControlService} from "./control.service"

const menusProxyService = new MenusProxyService();
const authProxyService = new AuthProxyService();
const submitCodeProxyService = new SubmitCodeProxyService();
const corporateService = new CorporateService();
const defaultApplicationsProxyService = new DefaultApplicationsProxyService();
const applicationsPortofoliosProxyService = new ApplicationsPortofoliosProxyService();
const modulesProxyService = new ModulesProxyService();
const userTypesService = new UserTypesService();
const rolesProxyService = new RolesProxyService();
const screensProxyService = new ScreensProxyService();
const controlService=new ControlService();

export {
  authProxyService,
  corporateService,
  defaultApplicationsProxyService,
  applicationsPortofoliosProxyService,
  userTypesService,
  modulesProxyService,
  submitCodeProxyService,
  rolesProxyService,
  menusProxyService,
  screensProxyService,
  controlService
};
