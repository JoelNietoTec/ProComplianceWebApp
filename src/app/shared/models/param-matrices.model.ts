import { ParamCategory } from './params.models';

export interface ParamMatrix {
  ID?: number;
  Name?: string;
  Code?: string;
  Description?: string;
  ParamCategories?: ParamCategory[];
  MatrixTypeID?: number;
  MatrixType?: MatrixType;
  CreateDate?: Date;
  ModificateDate?: Date;
}

export interface MatrixType {
  ID?: number;
  Name?: string;
  EnglishName?: string;
}
