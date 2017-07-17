import { Gender } from './genders.model';
import { Param, ParamValue, ParamSubValue } from './params.models';

export interface Participant {
  ID?: number;
  Code?: string;
  FirstName?: string;
  SecondName?: string;
  ThirdName?: string;
  FourthName?: string;
  GenderID?: number;
  Gender?: Gender;
  BirthDate?: Date;
  ParticipantTypeID?: number;
  ParticipantType?: ParticipantType;
  Address?: string;
  Email?: string;
  WebSite?: string;
  LegalRepresentative?: string;
  Phone?: string;
  MobilePhone?: string;
  ParticipantContacts?: ParticipantContact[];
  ParamMatrixID?: number;
  ParticipantParams?: ParticipantParam[];
  Score?: number;
}

export interface ParticipantParam {
  ID?: number;
  ParticipantID?: number;
  ParamMatrixID?: number;
  ParamCategoryID?: number;
  ParamID?: number;
  Param?: Param;
  ParamValueID?: number;
  ParamValue?: ParamValue;
  ParamSubValueID?: number;
  ParamSubValue?: ParamSubValue;
  Score?: number;
}


// export interface ParamMatrix {
//   ID?: number;
//   Name?: string;
//   Code?: string;
//   Description?: string;
//   ParamCategories?: ParamCategory[];
//   CreateDate?: Date;
//   ModificateDate?: Date;
// }

// export interface ParamCategory {
//   ID?: number;
//   Name?: string;
//   EnglishName?: string;
//   Weighting?: number;
//   ParamMatrixID?: number;
//   Params?: Param[];
// }

// export interface Param {
//   ID?: number;
//   ParamCategoryID?: number;
//   Name?: string;
//   EnglishName?: string;
//   Description?: string;
//   ParamTableID?: number;
//   Weighting?: number;
// }

export interface ParticipantType {
  ID?: number;
  Name?: string;
  EnglishName?: string;
}

export interface ParticipantContact {
  ID?: number;
  ParticipantID?: number;
  Name?: number;
  Phone?: number;
  Email?: number;
  MobilePhone?: number;
  Fax?: number;
}
