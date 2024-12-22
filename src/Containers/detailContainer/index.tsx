import { useState,useEffect } from "react";
import Button from "../../Components/buttons";
import { exoPlanetData } from "../../data/exoPlanet";
import FlexibleTable from "./table";
import { columnMapper } from "./table/util";
import TableDetailModal from "./Components/tableDetailModal";
import TabelConfigurator from "./Components/configurator";

export default function DetailsContainer(){
 
  const [columnData,setColumnData] = useState<{ columnKey: string; displayableColumnName: string; }[]>([])
  const [rowData,setRowData] = useState<any>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRowInformation, setSelectedRowInformation] = useState()
  const [openConfigurator, setConfigurator] = useState(false)

  useEffect(()=>{
    setColumnData(columnMapper)
    setRowData(exoPlanetData)
  },[])


 function handleOpenModal(data:any){
  setIsOpen(!isOpen)
  setSelectedRowInformation(data)
 }

 function handleConfiguratorClick(){
  setConfigurator(!openConfigurator)
 }

  return(
    <div className="tablet:pt-[90px] desktop:pt-16 p-[11px] overflow-hidden">
      <div className="h-[15px]"/>
      <header className="flex justify-between">
        <div className="flex row-auto justify-between gap-[20px] pt-4 items-center">
          <span className="font-display font-bold text-3xl">
            Exo Planet Data
          </span>
          <Button buttonText='Visualize table' buttonFunc={() => console.log("I am clicked")} />
        </div>
        <div className='ml-2 pt-2'>
           <Button buttonText='Table Configurator' buttonFunc={() => handleConfiguratorClick()} />
        </div>
      </header>
      <main>
        <FlexibleTable column={columnData} row={rowData} handleOpenModal={handleOpenModal}/>
        </main>
      <footer>

      </footer>
      {isOpen &&  <TableDetailModal columnMapper={columnData} tableInformation={selectedRowInformation} showModal={true} modalHandler={(status) => setIsOpen(status)} />}
      {openConfigurator &&  <TabelConfigurator showModal={openConfigurator}  setShowModal={(status)=> setConfigurator(status)}/>}
    </div>
  )
}