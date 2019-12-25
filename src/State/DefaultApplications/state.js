
export interface defaultApplicationState {
defaultApplications:Array;
loading:Boolean;
errorMessage:String;
}

export const defaultApplicationInitialState: defaultApplicationState = {
    defaultApplications:[],
    loading:0,
    errorMessage:"",
};
