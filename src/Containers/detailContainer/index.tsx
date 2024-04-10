import { useEffect, useRef, useState } from 'react'
import FlexibleTable from './table'
import { exoPlanetData } from "../../data/exoPlanet";
import Dropdown from '../../Components/dropdown';
import SuggestionAreaOnSearch from './suggestionCard';
import { columnMapper } from './table/util';
import Button from '../../Components/buttons';

function DetailContainer() {
  const [selectedPage, setSelectedPage] = useState({ status: true, indexVal: 0 })
  const [recordInPage, setRecordInPage] = useState(15)
  const [openSuggestionBox, setOpenSuggestionBox] = useState(false)
  const [fixedColumns, setFixedColumns] = useState<Array<{ columnKey: string; displayableColumnName: string }>>([])
  const [filterList, setFilterList] = useState<Array<{ columnKey: string; displayableColumnName: string }>>([])
  const [suggestResult, setSuggestionResult] = useState<Array<{ columnKey: string; displayableColumnName: string }>>([])
  
  const ref = useRef<HTMLDivElement>(null);

  const recordsArray = ['10 records', '15 records', '20 records', "25 records", "30 records", "40 records", "50 records"]

  const totalPageNumbers = Math.ceil(exoPlanetData.length / recordInPage);

  useEffect(() => {
    setFixedColumns(columnMapper.filter((_undefined, index) => (index <= 4)))
   
  }, [])

  useEffect(() => {
    /**
     * Invoke Function onClick outside of element
     */
    function handleClickOutside(event:any) {
      if (ref?.current && !ref?.current.contains(event.target)) {
        closeSuggestion();
      }
    }
    // Bind
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // dispose
      document.removeEventListener("mousedown", handleClickOutside);
    };
  
  }, [ref, closeSuggestion]);

  function closeSuggestion(){
    setOpenSuggestionBox(false)
  }
  function MenuItemClick(index: number) {
    let numberOfRecordsInTable = Number(recordsArray[index].split(" ")[0])
    setRecordInPage(numberOfRecordsInTable)
    setSelectedPage({ status: true, indexVal: 0 })
  }

  function FindSuggestion(searchTextValue: string) {
    const result = columnMapper.filter((val, index) => val.displayableColumnName.toLowerCase().includes(searchTextValue.toLowerCase()) && index > 4)
    setSuggestionResult(result)
  }

  function suggestionOnClick(itemClicked: string, index: number) {
    const result: any = suggestResult[index];
    console.log(itemClicked)
    console.log(result)
    if (result.displayableColumnName == itemClicked) {
      let tempVar = [...filterList];

      tempVar.push(result)



      setFilterList(tempVar)
    } else {
      console.log("an error occurred")
    }
  }

  function handleInputChange(evt: React.ChangeEvent<HTMLInputElement>) {
    if (evt.target?.value) {
      FindSuggestion(evt.target.value)
      setOpenSuggestionBox(true)
    }
  }
  function pageValueSetter(indexValRec: number) {
    if (indexValRec == selectedPage.indexVal) {
      setSelectedPage({ status: false, indexVal: indexValRec })
    } else {
      setSelectedPage({ status: true, indexVal: indexValRec })
    }

  }
  return (
    <div className="tablet:pt-[90px] desktop:pt-16 p-[11px] h-full rounded-md text-landingPage bg-headingFontColor">
      <div className="rounded-b-none pt-2 pl-2 pr-2 flex justify-between">
        <div className='desktop:flex desktop:justify-between'>
          <div className="font-display font-bold text-3xl pt-2">
          Exo Planet Data
        </div>
        <div className='w-[20%] pt-2'>
          <Button buttonStyles="" buttonText='Visualize table' buttonFunc={()=> console.log("I am clicked")} />
        </div>
        </div>
        <div className="flex w-[40%] pt-2">
          <input className="outline-none p-2 rounded-md h-12 w-[80%]" placeholder="Add Filters" onChange={(evt) => handleInputChange(evt)} />
          {openSuggestionBox && (<div ref={ref} className='absolute desktop:w-[27.5%] tablet:w-[25%] tablet:top-[155px] desktop:top-[136px] shadow-lg'>
            <SuggestionAreaOnSearch suggestionData={suggestResult} suggestionOnClick={(item, index) => suggestionOnClick(item, index)} />
          </div>)}
          <div className='ml-2'>
            <Dropdown dropdownCollapsedText={`${recordInPage} records in table`} buttonStyles={'bg-landingPage p-1 outline-none rounded-sm hover:rounded-xl duration-200'} menuItemLists={recordsArray} buttonOnClick={(evt) => console.log(evt)} menuItemOnClick={(index) => MenuItemClick(index)} />
          </div>
        </div>

      </div>
      <div>
        <FlexibleTable pageNumber={selectedPage.indexVal + 1} fixedColumns={fixedColumns} filterList={filterList} recordInPage={recordInPage} />
      </div>
      <div className="flex mb-12 pt-2 pl-2 pr-2 text-headingFontColor w-[40%] overflow-x-auto">
        {Array.from({ length: totalPageNumbers }, (_, index) => index + 1).map((item, index) => (
          <div
            key={index}
            className={`h-12 w-16 mr-3 cursor-pointer bg-indigo-500/100 rounded-sm text-center p-2 ${selectedPage.status && selectedPage.indexVal === index && 'border-solid border-2 border-landingPage'
              }`}
            onClick={() => pageValueSetter(index)}
          >
            {item}
          </div>
        ))}

      </div>

    </div>

  )
}

export default DetailContainer
