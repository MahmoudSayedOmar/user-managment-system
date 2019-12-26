export interface UsersModel {
  key: String;
  userFirstName: String;
  userMiddleName: String;
  userLastName: String;
  userValidationType: String;
  userEmail: String;
  userDOB: Date;
  userPhoto: String;
  userGender: String;
  userMobile: String;
  userDefaultLanguage: String;
  userTypes: Array;
  userRoles: Array;
  actions: Object;
}
