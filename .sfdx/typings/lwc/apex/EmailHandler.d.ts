declare module "@salesforce/apex/EmailHandler.sendEmailController" {
  export default function sendEmailController(param: {emailDetailStr: any}): Promise<any>;
}
declare module "@salesforce/apex/EmailHandler.languageTranslate" {
  export default function languageTranslate(param: {Text: any, sourceLangCode: any, targetLangCode: any}): Promise<any>;
}
