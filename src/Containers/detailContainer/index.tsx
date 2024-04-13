import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons';
import { faBackwardFast } from '@fortawesome/free-solid-svg-icons';
import { faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { faForwardFast } from '@fortawesome/free-solid-svg-icons';

import { exoPlanetData } from "../../data/exoPlanet";
import { columnMapper } from './table/util';

import FlexibleTable from './table'
import Dropdown from '../../Components/dropdown';
import SuggestionAreaOnSearch from './suggestionCard';
import FilterInputField from './FilterInputField'
import Button from '../../Components/buttons';
import TableDetailModal from './tableDetailModal';

function DetailContainer() {
  const [selectedPage, setSelectedPage] = useState({ status: true, indexVal: 1 })
  const [recordInPage, setRecordInPage] = useState(15)
  const [showModal, setShowModal] = useState(false)
  const [selectedTableRowInfo, setSelectedTableRowInfo] = useState<Object>({})
  const [openSuggestionBox, setOpenSuggestionBox] = useState(false)
  const [mainPageArr,setMainPageArr] = useState<number[]>([])
  const [chunkPageArr,setChunkPageArr] = useState<number[]>([])
  const [fixedColumns, setFixedColumns] = useState<Array<{ columnKey: string; displayableColumnName: string }>>([])
  const [filterList, setFilterList] = useState<Array<{ columnKey: string; displayableColumnName: string }>>([])
  const [suggestResult, setSuggestionResult] = useState<Array<{ columnKey: string; displayableColumnName: string }>>([])
  const [columnMapperData, setColumnMapper] = useState<Array<{ columnKey: string; displayableColumnName: string }>>([])
 
  const ref = useRef<HTMLDivElement>(null);

  const recordsArray = ['10 records', '15 records', '20 records', "25 records", "30 records", "40 records", "50 records"]

  const totalPageNumbers = Math.floor(exoPlanetData.length / recordInPage);

  useEffect(() => {
    setColumnMapper(columnMapper)
    setFixedColumns(columnMapper.filter((_undefined, index) => (index <= 4)))

  }, [])

  useEffect(()=>{
    let arr: number[] = []

    Array.from({ length: totalPageNumbers }, (_, index) => index + 1).map((item) => (
      arr.push(item)
    ))
    let tempArr: number[] = [];
    arr.map((item: number, index: number) => {
      index < 5 && tempArr.push(item)
    })
    setChunkPageArr(tempArr)
    setMainPageArr(arr)
  },[recordInPage, totalPageNumbers])

  useEffect(() => {
    function handleClickOutside(event: any) {
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

  function closeSuggestion() {
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

    if (result.displayableColumnName == itemClicked) {
      let tempVar = [...filterList];

      tempVar.push(result)

      setFilterList(tempVar)

      let suggestionTemp = [...suggestResult];
      let tempColumnMapper = [...columnMapperData]
      setSuggestionResult(suggestionTemp.filter((evt) => evt.displayableColumnName != itemClicked))
      setColumnMapper(tempColumnMapper.filter((evt) => evt.displayableColumnName != itemClicked))

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
  
      setSelectedPage({ status: true, indexVal: indexValRec })

  }

  function removeFilter(index: number) {
    let tempVar = [...filterList];
    tempVar.splice(index, 1)
    setFilterList(tempVar)
  }

  function showTableDetails(data: any) {
    setSelectedTableRowInfo(data)
    setShowModal(true)
  }


  function handleForwardStep() {
    let arr: number[] = [...mainPageArr]
    let tempVar: number[] = [...chunkPageArr]
    let startingIndex = tempVar[0];
    let finalIndex = startingIndex + 5;
    if (finalIndex > arr.length) {
      finalIndex = finalIndex - (finalIndex - arr.length)
      startingIndex = startingIndex - 1;
    }
    if (finalIndex == 0) {
      finalIndex = arr.length - 1;
    }
   
    if(finalIndex != startingIndex ){
      let temp = arr.slice(startingIndex, finalIndex)
      setChunkPageArr(temp)
    }

  }

  function handleBackwardStep(){
    let arr: number[] = [...mainPageArr]
    let tempVar: number[] = [...chunkPageArr]
    let startingIndex = tempVar[0] - 2 ;
    let finalIndex = startingIndex + 5;
    let temp: number[] = []
    if(startingIndex >= 0){
       if(finalIndex < 0){
        finalIndex = tempVar.length - (2 + finalIndex )
        
       }
       temp = arr.slice(startingIndex, finalIndex)
      
        setChunkPageArr(temp)
    }
    

  }

  function handleForwardStepFast(){
    let arr: number[] = [...mainPageArr]
    let finalIndex = arr[arr.length - 1];
    let startingIndex = finalIndex - 5
    if(startingIndex < 0 ){
      startingIndex = finalIndex - (5 + startingIndex)
    }
    if(finalIndex != startingIndex){
      let temp = arr.slice(startingIndex, finalIndex)
      setChunkPageArr(temp)
    }
  }

  function handleBackwardStepFast(){
    let arr: number[] = [...mainPageArr]
    let finalIndex = 5;
    let startingIndex = 0
    if(finalIndex > arr.length){
      finalIndex = finalIndex -  (finalIndex - (arr.length -1))
    }
    if(finalIndex != startingIndex){
      let temp = arr.slice(startingIndex, finalIndex)
      setChunkPageArr(temp)
    }

  }
  return (
    <div className="tablet:pt-[90px] desktop:pt-16 p-[11px] h-full rounded-md text-landingPage bg-headingFontColor relative">
      <div className="rounded-b-none pt-2 pl-2 pr-2 flex justify-between">
        <div className='desktop:flex desktop:justify-between'>
          <div className="font-display font-bold text-3xl pt-2">
            Exo Planet Data
          </div>
          {showModal && (<>
            <TableDetailModal columnMapper={columnMapper} tableInformation={selectedTableRowInfo} showModal={true} modalHandler={(status) => setShowModal(status)} />
          </>)}
          <div className='w-[20%] pt-2'>
            <Button buttonStyles="" buttonText='Visualize table' buttonFunc={() => console.log("I am clicked")} />
          </div>
        </div>
        <div className="flex w-[40%] pt-2">
          <div className='relative w-[100%]'>
            <FilterInputField filterList={filterList} removeFilter={(index) => removeFilter(index)} handleInputChange={(evt) => handleInputChange(evt)} />
            {openSuggestionBox && (<div ref={ref} className='absolute shadow-lg'>
              <SuggestionAreaOnSearch suggestionData={suggestResult} suggestionOnClick={(item, index) => suggestionOnClick(item, index)} />
            </div>)}
          </div>
          <div className='ml-2'>
            <Dropdown dropdownCollapsedText={`${recordInPage} records in table`} buttonStyles={'bg-landingPage p-1 outline-none rounded-sm hover:rounded-xl duration-200'} menuItemLists={recordsArray} menuItemOnClick={(index) => MenuItemClick(index)} />
          </div>
        </div>

      </div>

      <div>
        <FlexibleTable pageNumber={selectedPage.indexVal + 1} showTableDetails={(index: number) => showTableDetails(index)} fixedColumns={fixedColumns} filterList={filterList} recordInPage={recordInPage} />
      </div>

      <div className="flex mb-12 pt-2 pl-2 pr-2 text-headingFontColor w-[40%] m-auto">
        <div className='cursor-pointer font-display font-bold text-3xl h-[100px] w-[100px] text-landingPage  rounded-md mr-3 mt-1' onClick={handleBackwardStepFast}>
          <FontAwesomeIcon icon={faBackwardFast} />
        </div>
        <div className='cursor-pointer font-display font-bold text-3xl h-[100px] w-[100px] text-landingPage  rounded-md mr-3 mt-1' onClick={handleBackwardStep}>
          <FontAwesomeIcon icon={faBackwardStep} />
        </div>
        <div className='flex'>{chunkPageArr.map((item, index) => (
          <div
            key={index}
            className={`h-12 w-16 mr-3 cursor-pointer bg-indigo-500/100 rounded-sm text-center p-2 ${selectedPage.status && selectedPage.indexVal === item && 'border-solid border-2 border-landingPage'
              }`}
            onClick={() => pageValueSetter(item)}
          >
            {item}
          </div>
        ))}
        </div>
        <div className='cursor-pointer font-display font-bold text-3xl h-[100px] w-[100px] text-landingPage  rounded-md mr-3 mt-1' onClick={handleForwardStep}>
          <FontAwesomeIcon icon={faForwardStep} />
        </div>
        <div className='cursor-pointer font-display font-bold text-3xl h-[100px] w-[100px] text-landingPage  rounded-md mr-3 mt-1' onClick={handleForwardStepFast}>
          <FontAwesomeIcon icon={faForwardFast} />
        </div>
      </div>


    </div>

  )
}

export default DetailContainer
