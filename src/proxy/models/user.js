export interface UsersModel {
  id: String;
  fName: String;
  mName: String;
  lName: String;
  validateBy: String;
  email: String;
  dateOfBirth: Date;
  userPhoto: String;
  sex: String;
  mobileNumber: String;
  defaultLanguage: String;
  corporate: String;
  applications: Array;
  actions: Object;
}
