import { AuthProxyService } from "./auth-proxy.service";
import { CorporateService } from "./corporate.service";

const authProxyService = new AuthProxyService();
const corporateService = new CorporateService();
export { authProxyService, corporateService };
