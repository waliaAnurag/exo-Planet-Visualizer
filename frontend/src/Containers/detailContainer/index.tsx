import React, { useState, useEffect } from "react";
import Button from "../../Components/buttons";
import { exoPlanetData } from "../../data/exoPlanet";
import FlexibleTable from "./table";
import { columnMapper } from "./table/util";
import TableDetailModal from "./Components/tableDetailModal";
import TabelConfigurator from "./Components/configurator";
import { useTranslation } from "react-i18next";
import { TableConfigurationMeta } from "./utility/types";
import SearchBar from "./Components/searchBar";

export default function DetailsContainer() {

  const [columnData, setColumnData] = useState<{ columnKey: string; displayableColumnName: string; }[]>([])
  const [rowData, setRowData] = useState<any>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRowInformation, setSelectedRowInformation] = useState()
  const [openConfigurator, setConfigurator] = useState(false)
  const { t } = useTranslation();

  useEffect(() => {
    setColumnData(columnMapper)
    setRowData(exoPlanetData)
  }, [])


  function handleOpenModal(data: any) {
    setIsOpen(!isOpen)
    setSelectedRowInformation(data)
  }

  function handleConfiguratorClick() {
    setConfigurator(!openConfigurator)
  }

  const ConfigureTable = (tableMeta: TableConfigurationMeta) => {
    console.log(tableMeta)
    tableMeta?.configuredColumns && setColumnData(tableMeta?.configuredColumns)
    let rowDataTemp = [...rowData]
    if (tableMeta.planets) {
      rowDataTemp = rowDataTemp.filter((innerItem) => innerItem.sy_pnum === tableMeta.planets)
    }
    if (tableMeta.stars) {
      rowDataTemp = rowDataTemp.filter((item) => item.sy_snum === tableMeta.stars)
    }
    setRowData(rowDataTemp)
  }

  const searchItem = (val: string) => {
    let rowDataTemp = [...rowData]
    const filteredVal = val.toLowerCase()
    rowDataTemp = rowDataTemp.filter((item) => item.pl_name.toLowerCase().includes(filteredVal) || item.hostname.toLowerCase().includes(filteredVal) || item.soltype.toLowerCase().includes(filteredVal))
    setRowData(!val ? exoPlanetData : rowDataTemp)
  }

  return (
    <div className="tablet:mt-[95px] desktop:mt-16 p-[11px] overflow-hidden">
      <header className="flex justify-between">
        <div className="flex row-auto justify-between gap-[20px] pt-4 items-center">
          <span className="font-display font-bold text-3xl">
            {t("DASHBOARD.EXOPLANET_HEADING")}
          </span>
          <Button buttonText='Visualize table' buttonFunc={() => console.log("I am clicked")} />

        </div>
        <div className='ml-2 pt-4 items-center w-[40%]'>
          <SearchBar searchData={(txt) => searchItem(txt)} />
        </div>
        <div className='ml-2 pt-4 items-center'>
          <Button buttonText='Table Configurator' buttonFunc={() => handleConfiguratorClick()} />
        </div>
      </header>
      <main className="border-2 mt-[5px] rounded-md">
        <FlexibleTable column={columnData ?? []} row={rowData ?? []} handleOpenModal={handleOpenModal} />
      </main>
      <footer>
      </footer>
      {isOpen && <TableDetailModal columnMapper={columnData} tableInformation={selectedRowInformation} showModal={true} modalHandler={(status) => setIsOpen(status)} />}
      {openConfigurator && <TabelConfigurator columnData={columnData} showModal={openConfigurator} setShowModal={(status) => setConfigurator(status)} ConfigureTable={(metaData) => ConfigureTable(metaData)} />}
    </div>
  )
}