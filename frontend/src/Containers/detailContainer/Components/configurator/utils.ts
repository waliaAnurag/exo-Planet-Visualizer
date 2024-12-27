export const filterOutMasterChunk = (arr:Array<MasterFieldValueMeta>,requiredKey:dropdownOptions) =>{
    let temp:MasterFieldValueMeta = {
        key: "",
        value: "",
        operator: [],
        subValues: []
    }
    arr.forEach((item)=> {
       requiredKey.some((itemInner)=>{
        if(itemInner.key === item.key){
            temp={...item}
        }}
    )
    
    })
    return temp
}