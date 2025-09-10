import { AnyARecord } from "dns";

export interface Therapy {
    data:  Datum[];
    total: number;
    page:  number;
    limit: number;
}

export interface Datum {
    _id:                    string;
    detail_url:             string;
    image_url?:             string;
    name:                   string;
    title:                  string;
    about:                  string;
    finances:               AdditionalCredential[];
    finance_object:         string[];
    qualifications:         AdditionalCredential[];
    additional_credentials: AdditionalCredential[];
    specialties:            string[];
    issues:                 string[];
    sexuality:              string[];
    mental_health:          string[];
    ethnicity:              string[];
    languages:              string[];
    faith:                  string[];
    communities:            any[];
    age:                    string[];
    type_of_therapy:        string[];
    modality:               AnyARecord[];
    address?:               string;
    city:                   any;
    state:                  any;
    zip:                    string;
    phone?:                 string;
    __v:                    number;
    website?:               string;
    gender_pronouns?:       string;
}

export interface AdditionalCredential {
    key:    string;
    value?: string;
    _id:    string;
}


