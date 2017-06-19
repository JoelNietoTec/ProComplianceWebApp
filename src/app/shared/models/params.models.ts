import { ParamMatrix } from './param-matrices.model';

export interface ParamTable {
  ID?: number;
  Name?: string;
  EnglishName?: string;
  CreateDate?: Date;
  ModificateDate?: Date;
  ParamValues?: ParamValue[];
}

export interface ParamCategory {
  ID?: number;
  Name?: string;
  EnglishName?: string;
  Weighting?: number;
  ParamMatrixID?: number;
}

export interface ParamValue {
  ID?: number;
  ParamTableID?: number;
  DisplayValue?: string;
  EnglishDisplayValue?: string;
  Score?: number;
}

export interface Param {
  ID?: number;
  ParamCategoryID?: number;
  Name?: string;
  EnglishName?: string;
  Description?: string;
  ParamTableID?: number;
  Weighting?: number;
}
