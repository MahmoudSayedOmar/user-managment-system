import { AuthProxyService } from "./auth-proxy.service";
import { DefaultApplicationsProxyService} from "./default-applications-proxy-service"

const authProxyService = new AuthProxyService();
const defaultApplicationsProxyService = new DefaultApplicationsProxyService();

export {
  authProxyService,
  defaultApplicationsProxyService
};
