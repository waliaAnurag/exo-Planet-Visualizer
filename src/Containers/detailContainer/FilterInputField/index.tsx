import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Tooltip from "../../../Components/tooltip";

interface IProps {
    handleInputChange: (evt?: any) => void
    filterList: Array<{ columnKey: string; displayableColumnName: string }>
    removeFilter: (name:string,index:number) => void
}
function FilterInputField(props: IProps) {
    const { handleInputChange, filterList,removeFilter } = props;
    return (
        <div className="w-[100%] rounded-md border-solid border-2 border-indigo-500/100 ">
        <div className='overflow-y-auto flex-wrap flex w-[100%] p-2'>
            {filterList.map((item: { columnKey: string; displayableColumnName: string }, index:number) => {
                return (
                    <Tooltip message={item.displayableColumnName}>
                        <div className='group flex w-[90px] h-13 mr-1 bg-hoverOverColor rounded-md border-solid border-2 border-indigo-500/100'>
                            <span className="truncate">{item.displayableColumnName }</span>
                            <div className="relative top-[-12px] z-20" onClick={() => removeFilter(item.displayableColumnName,index)}><FontAwesomeIcon icon={faCircleXmark} /></div>
                        </div>
                    </Tooltip>
                )
            })}
            
            
        </div>
        <input className="outline-none ml-2 rounded-md border-none bg-transparent" placeholder="Add Filters" onChange={(evt) => handleInputChange(evt)} />
        </div>
       
    )
}

export default FilterInputField
