declare module "@salesforce/apex/LoginController.login" {
  export default function login(param: {username: any, password: any}): Promise<any>;
}
declare module "@salesforce/apex/LoginController.getIsUsernamePasswordEnabled" {
  export default function getIsUsernamePasswordEnabled(): Promise<any>;
}
