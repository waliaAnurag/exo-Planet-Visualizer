import React, { useState } from 'react'
import TextField from '@mui/material/TextField'

interface IProps{
    searchData?:(text:string) =>void;
}
function SearchBar({searchData}:IProps) {

    const [searchText, setSearchText] = useState("")

    const searchHandler=(text:string)=>{
        setSearchText(text)
        searchData?.(text)
    }
    return (
        <TextField 
           id="search-bar" 
           placeholder="Search" 
           variant="outlined" 
           value={searchText}
           sx={{
            width:"100%"
           }}
           onChange={(evt) => searchHandler(evt.target.value)} 
           />

    )
}

export default SearchBar
