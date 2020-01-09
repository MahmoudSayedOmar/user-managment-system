export interface UserLoginModel {
  userName: String;
  password: String;
}

export interface UserRegisterModel {
  email: String;
  password: String;
  fName: String;
  mName: String;
  lName: String;
  validateBy: String;
  dateOfBirth: String;
  mobileNumber: String;
}

export interface UserEditModel {
  email: String;
  fName: String;
  mName: String;
  lName: String;
  validateBy: String;
  dateOfBirth: String;
  mobileNumber: String;
}
