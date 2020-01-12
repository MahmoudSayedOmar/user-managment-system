import { SubmitCodeDto } from "../../proxy/dtos/submitcode";

export interface submitCodeState {
  mail: String;
  code: String;
}

export const submitCodeInitialState: submitCodeState = {
  mail: "",
  code: ""
};
