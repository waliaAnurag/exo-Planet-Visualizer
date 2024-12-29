import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import { Paper } from "@mui/material";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from "@mui/material/TablePagination";
import NoData from "../../../Components/NoData";

interface IProps {
    column: {
        columnKey: string;
        displayableColumnName: string;
    }[]
    row: any;
    handleOpenModal : (data:any)=> void;
}
function FlexibleTable(props: IProps) {
    const { column, row, handleOpenModal } = props
    const [finalisedColumnsValue,setColumnMapper] = useState<Array<{ columnKey: string; displayableColumnName: string }>>(column)
    const [rowVal,setRowData] = useState(row)
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(50);

    useEffect(()=>{
        setRowData(row)
        setColumnMapper(column)
    },[row])
    const handleChangePage = (newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>

            <div className="font-display flex text-xl overflow-x-auto overflow-y-auto w-[100%]  whitespace-nowrap">
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{
                        maxHeight : 450
                    }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {finalisedColumnsValue.map((column) => (
                                        <TableCell
                                            key={column.columnKey}
                                            align={"center"}
                                            style={{ minWidth: 250, fontWeight:900, fontSize:"18px" }}
                                        >
                                            {column.displayableColumnName}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rowVal.length > 0 ? rowVal
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row: any) => {
                                        return (
                                            <TableRow className="cursor-pointer" hover role="checkbox" tabIndex={-1} key={row.pl_name} onClick={()=>handleOpenModal(row)}>
                                                {finalisedColumnsValue.map((column) => {
                                                    const value = row[column.columnKey];
                                                    return (
                                                        <TableCell key={column.columnKey}
                                                            align={"center"}>
                                                            {column.columnKey ? ((column.columnKey == "pl_refname" || column.columnKey == "st_refname" || column.columnKey == "sy_refname") ? <div className="underline text-indigo-500/100" dangerouslySetInnerHTML={{ __html: value }} /> : value) : 0.00}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    }): <div><NoData message={"No data presnt"}/></div>} 
                            </TableBody>

                        </Table>

                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[50, 125, 250, 400, 500]}
                        component="div"
                        count={rowVal.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={(_,newPage)=>handleChangePage(newPage)}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>


        </div>
    )
}

export default FlexibleTable
