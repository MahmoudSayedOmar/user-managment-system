import { ExtraModulesDto } from "./extramodules";

export class ApplicationsPortofolioDto {
  id: Number;
  name: String;
  baseAPPId: Number;
  extraModules: ExtraModulesDto[];
}
