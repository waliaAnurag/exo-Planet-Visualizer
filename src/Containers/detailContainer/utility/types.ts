interface TableConfigurationMeta{
    configuredColumns?:Array<{ columnKey: string; displayableColumnName: string; }>;
    planets?:number;
    stars?:number;
    yearStart?:number;
    yearEnd?:number,

}


interface MasterField{
    key:string;
    value:string;
    operator:Array<string>;
    subValues : Array<{key:string;value:string}>;
}

type dropdownOptions = Array<{ key: string | number; value: string|number }>

interface MasterFieldValueMeta{
    key:string;
    value:string;
    operator:dropdownOptions;
    subValues : dropdownOptions;
}