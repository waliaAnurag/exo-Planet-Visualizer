export interface TableModalData{
        columnKey: string;
        displayableColumnName: string;
}

export interface TableConfigurationMeta{
    configuredColumns?:Array<{ columnKey: string; displayableColumnName: string; }>;
    planets?:number;
    stars?:number;
    yearStart?:number;
    yearEnd?:number,
}


export interface MasterField{
    key:string;
    value:string;
    operator:Array<string>;
    subValues : Array<{key:string;value:string}>;
}

export type dropdownOptions = Array<{ key: string | number; value: string|number }>

export interface MasterFieldValueMeta{
    key:string;
    value:string;
    operator:dropdownOptions;
    subValues : dropdownOptions;
}