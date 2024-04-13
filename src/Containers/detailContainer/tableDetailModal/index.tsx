import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
interface IProps {
    columnMapper: Array<{ columnKey: string; displayableColumnName: string }>
    tableInformation: any;
    showModal: boolean;
    modalHandler: (status: boolean) => void;
}
function TableDetailModal(props: IProps) {
    const { columnMapper, tableInformation, showModal, modalHandler } = props;

    return showModal ? (
        <div
            className="fixed z-50 bg-black bg-opacity-40 top-0 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center"
        >

            <div className="modal bg-white rounded-lg p-4 w-[80%] h-[70%] overflow-y-auto overflow-x-hidden">
                <div className="font-display font-bold text-3xl text-center">
                    Selected Table Row Information
                </div>
                <div className=" bg-indigo-50 rounded-full w-45 h-45 absolute top-[13%] z-400 left-[88.6%] cursor-pointer" onClick={() => modalHandler(false)}>
                    <FontAwesomeIcon size="2x" icon={faCircleXmark} />
                </div>
                <div className="m-3 font-display text-xl">
                    {columnMapper.map((item: any) => {
                        return (
                            <div className="flex justify-between p-4 border-solid border-2">
                                <div>
                                    {item.displayableColumnName}
                                </div>
                                <div className="text-right">
                                    {tableInformation[item.columnKey]  ? ((item.columnKey=="pl_refname"  || item.columnKey=="st_refname" || item.columnKey=="sy_refname")?  <div className="underline text-indigo-500/100" dangerouslySetInnerHTML={{ __html: tableInformation[item.columnKey] }} />: tableInformation[item.columnKey]) : 0.00}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    ) : null
}

export default TableDetailModal
