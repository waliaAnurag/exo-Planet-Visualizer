interface IProps{
    suggestionData : Array<{columnKey:string; displayableColumnName:string}>;
    suggestionOnClick : (item:string, index:number) => void
}
function SuggestionAreaOnSearch(props:IProps) {
    const {suggestionData, suggestionOnClick} = props

  return (
    <div className="bg-headingFontColor rounded-md font-display text-xl">
      {suggestionData.map((item:{columnKey:string; displayableColumnName:string}, index:number)=>{
        return(
            <div className="p-6 cursor-pointer hover:bg-hoverOverColor" onClick={()=>suggestionOnClick(item.displayableColumnName, index)}>
                {item.displayableColumnName}
                </div>
        )
      })}
    </div>
  )
}

export default SuggestionAreaOnSearch
