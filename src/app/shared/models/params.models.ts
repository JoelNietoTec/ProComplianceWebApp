import { ParamMatrix } from './param-matrices.model';

export interface ParamMaster {
    ID?: number;
    CategoryID?: number;
    Name?: string;
    EnglishName?: string;
    FreeField?: string;
    IsRequired?: string;
    Weighting?: number;
    ParamCategoryID?: number;
    ParamCategory?: ParamCategory;
}

export interface ParamCategory {
    ID?: number;
    Name?: string;
    EnglishName?: string;
    Weighting?: number;
    MatrixID?: number;
    ParamMatrix?: ParamMatrix;
}

export interface ParamValue {
    ID?: number;
    ParamMasterID?: number;
    DisplayValue?: string;
    EnglishDisplayValue?: string;
    Score?: number;
    ParamMaster?: ParamMaster;
}
