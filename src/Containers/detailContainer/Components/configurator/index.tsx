import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import MultiSelect from '../../../../Components/MultiSelect';
import Button from '../../../../Components/buttons';
import BasicModal from '../../../../Components/Modal/basicModal';

interface IProps {
    showModal: boolean;
    setShowModal: (status: boolean) => void;
    columnData: Array<{ columnKey: string; displayableColumnName: string; }>
    ConfigureTable: (metaData: TableConfigurationMeta) => void;
}
function TabelConfigurator({ showModal, setShowModal, columnData, ConfigureTable }: IProps) {
    const [multiSelectOption, setMultiSelectOption] = useState<dropdownOptions>([])
    const [configureTableData, setConfiguratorData] = useState<TableConfigurationMeta>({})
    const { t } = useTranslation();

    useEffect(() => {
        setMultiSelectOption(columnData.map((item, index) => {
            return {
                key: index,
                value: item.displayableColumnName
            }
        }))


    }, [])

    

    const handleYearRange = (type: string, val: string) => {
        const configureTable:TableConfigurationMeta = {}
        if (type === "START") {
            configureTable.yearStart = Number(val)
        } else {
            configureTable.yearEnd = Number(val)
        }
        setConfiguratorData({...configureTableData, ...configureTable})
    }

    const updateColData = (col: dropdownOptions) => {
        const configureTable:TableConfigurationMeta = {}
        configureTable.configuredColumns = columnData.filter((item) => col.some((c) => c.value === item.displayableColumnName) ?? [])
        setConfiguratorData({...configureTableData, ...configureTable})
    }

    const planetConfiguration = (planet?: number, star?: number) => {
        const configureTable:TableConfigurationMeta = {}
        if (planet) {
            configureTable.planets = planet
        } else if (star) {
            configureTable.stars = star
        }
        setConfiguratorData({...configureTableData, ...configureTable})
     
    }

    return (
        <BasicModal
            heading={t("DASHBOARD.CONFIGURATOR.HEADING")}
            showModal={showModal}
            setShowModal={(status: boolean) => setShowModal(status)}
        >
            <div>
                <div className="m-3 font-display text-xl flex justify-between flex-wrap">
                    <div>
                        <h4 className='mb-[15px] font-bold'>{t("DASHBOARD.CONFIGURATOR.COL_FILTER_HEADING")}</h4>
                        <MultiSelect multiSelectOptions={multiSelectOption ?? []} label={t("DASHBOARD.CONFIGURATOR.COL_FILTER")} onInput={(val) => updateColData(val)} />
                    </div>
                    <div>
                        <h4 className='mb-[15px] font-bold'>{t("DASHBOARD.CONFIGURATOR.STAR_PLANET_CONFIGURE")}</h4>
                        <div className='mb-[10px]'>
                            <span>{t("DASHBOARD.CONFIGURATOR.NUMBER_OF_STARS")} </span> <span><Slider
                                aria-label="number of stars"
                                sx={{ color: "#182633" }}
                                defaultValue={1}
                                getAriaValueText={(valuetext: number) => `${valuetext}°C`}
                                valueLabelDisplay="auto"
                                shiftStep={1}
                                step={1}
                                marks
                                min={1}
                                max={10}
                                onChange={(_, val) => planetConfiguration(undefined, Array.isArray(val) ? val[0] : val)}
                            /></span>
                        </div>
                        <div className='mb-[10px]'>
                            <span>{t("DASHBOARD.CONFIGURATOR.NUMBER_OF_PLANET")} </span> <span><Slider
                                aria-label="number of planets"
                                defaultValue={30}
                                sx={{ color: "#182633" }}
                                getAriaValueText={(valuetext: number) => `${valuetext}°C`}
                                valueLabelDisplay="auto"
                                shiftStep={30}
                                step={5}
                                marks
                                min={0}
                                max={110}
                                onChange={(_, val) => planetConfiguration(Array.isArray(val) ? val[0] : val, undefined)}
                            /></span>
                        </div>
                        <div className='mb-[10px]'>
                            <h4 className='mb-[15px] font-bold'>{t("DASHBOARD.CONFIGURATOR.YEAR_DURATION")}</h4>
                            <span><TextField type="number" defaultValue={2015} id="outlined-basic" label={t("DASHBOARD.CONFIGURATOR.START_YEAR")} variant="outlined" onChange={(evt) => handleYearRange("START", evt.target.value)} /> </span><span><TextField type="number" id="outlined-basic" defaultValue={2020} label={t("DASHBOARD.CONFIGURATOR.END_YEAR")} variant="outlined" onChange={(evt) => handleYearRange("END", evt.target.value)} /></span>
                        </div>
                    </div>

                </div>

                <div className="w-[100%] flex justify-center mt-[20px]">
                    <Button disabled={Object.keys(configureTableData).length === 0 } buttonStyles=" !w-[80%]" buttonText='Configure Table' buttonFunc={() => {
                        setShowModal(false);
                        ConfigureTable(configureTableData)
                    }} />
                </div>

            </div>
        </BasicModal>
    )

}

export default TabelConfigurator
