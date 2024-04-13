import { exoPlanetData } from "../../../data/exoPlanet";
import { useEffect, useState } from "react";
import { columnMapper } from "./util";

interface IProps {
    pageNumber:number;
    recordInPage:number;
    filterList:Array<{columnKey:string; displayableColumnName:string}>
    fixedColumns: Array<{columnKey:string; displayableColumnName:string}>
    showTableDetails: (data:any) => void;
}
function FlexibleTable(props: IProps) {
    const {  pageNumber,recordInPage,filterList, fixedColumns,showTableDetails} = props
     let LastIndex = 0;
   
     let tempData = [...exoPlanetData];
   
   
     const[RecordInPageValue, setRecordInPageValue] = useState(recordInPage)
     const [finalisedColumnsValue, setFinalisedColumnsValue] = useState<Array<{columnKey:string; displayableColumnName:string}>>([])
    const [startIndexValue, setStartIndexValue] = useState(pageNumber*recordInPage - recordInPage);
 
     LastIndex = startIndexValue + RecordInPageValue;
// the pagination needs to save data what was last startindex based on that we will derive last Index using record in page

     useEffect(()=>{
        setFinalisedColumnsValue(columnMapper)
     },[])

     useEffect(()=>{
        setRecordInPageValue(recordInPage)
        
        LastIndex = startIndexValue + RecordInPageValue;
     },[recordInPage])

     useEffect(()=>{
        
        setStartIndexValue(pageNumber*recordInPage - recordInPage)
    
     },[pageNumber])
     
    useEffect(()=>{
        if(filterList && filterList.length >= 1){
            let tempArr = fixedColumns.concat(filterList)
            setFinalisedColumnsValue(tempArr)
            console.log(tempArr)
        }else{
            setFinalisedColumnsValue(columnMapper)
        }
    },[filterList])
   
    
    let paginatedExoPlanetData:any[] = []

    if(LastIndex > exoPlanetData.length){
        LastIndex = exoPlanetData.length - 1
    }

    if(startIndexValue >= exoPlanetData.length){
        console.log("Not permitted")
        paginatedExoPlanetData = []
    
        
    }else{
        paginatedExoPlanetData = tempData.slice(startIndexValue, LastIndex);
    }

    function showTableDetailsToParent(data:any){
        showTableDetails(data)
    }
 
    return (
        <div>
           
            <div className="font-display flex text-xl overflow-x-auto overflow-y-auto w-[100%] whitespace-nowrap">
                {
                    finalisedColumnsValue.map((itemMain: any) => {
                        return (
                            <div className="w-[100%]">
                                <div className='font-bold p-3 border-solid border-b-2 border-indigo-500/100 bg-headingFontColor text-landingPage w-[100%]'>
                                    {itemMain.displayableColumnName}
                                </div>
                                {
                                    paginatedExoPlanetData.map((item: any) => {
                                        return (
                                        <div className='p-3 cursor-pointer text-center bg-headingFontColor border-solid border-b-2 border-indigo-500/100 text-landingPage' onClick={()=> !(itemMain.columnKey=="pl_refname"  || itemMain.columnKey=="st_refname" || itemMain.columnKey=="sy_refname") && showTableDetailsToParent(item)}>
                                            {item[itemMain.columnKey]  ? ((itemMain.columnKey=="pl_refname"  || itemMain.columnKey=="st_refname" || itemMain.columnKey=="sy_refname")?  <div className="underline text-indigo-500/100" dangerouslySetInnerHTML={{ __html: item[itemMain.columnKey] }} />: item[itemMain.columnKey]) : 0.00}
                                        </div>
                                        )
                                    })
                                }
                            </div>
                        )

                    })
                }

            </div>
            

        </div>
    )
}

export default FlexibleTable
