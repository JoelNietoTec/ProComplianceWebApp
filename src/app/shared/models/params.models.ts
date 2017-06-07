import { ParamMatrix } from './param-matrices.model';

export interface ParamMaster {
    ID?: number;
    ParamCategoryID?: number;
    Name?: string;
    EnglishName?: string;
    FreeField?: string;
    IsRequired?: string;
    Weighting?: number;
    ParamValues?: ParamValue[];
}

export interface ParamCategory {
    ID?: number;
    Name?: string;
    EnglishName?: string;
    Weighting?: number;
    ParamMatrixID?: number;
    ParamMasters?: ParamMaster[];
}

export interface ParamValue {
    ID?: number;
    ParamMasterID?: number;
    DisplayValue?: string;
    EnglishDisplayValue?: string;
    Score?: number;
}
