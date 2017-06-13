import { ParamMatrix } from './param-matrices.model';

export interface ParamMaster {
    ID?: number;
    Name?: string;
    EnglishName?: string;
    FreeField?: string;
    CreteDate?: Date;
    ModificateDate?: Date;
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
    ParamMasterID?: number;
    DisplayValue?: string;
    EnglishDisplayValue?: string;
    Score?: number;
}
