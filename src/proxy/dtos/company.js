export class CompaniesDto {
  key: String;
  corporateName: String;
  corporateCountry: String;
  corporateCity: String;
  corporatePhoneNumber: String;
  corporateAddress: String;
  corporatePostalCode: String;
  corporateRegisterationNumber: String;
  actions: Object;
  applications: Application[];
}

export class Module {
  name: String;
}
export class Application {
  name: String;
  corporateId: Number;
  baseAPPId: Number;
  modules: Module[];
}
