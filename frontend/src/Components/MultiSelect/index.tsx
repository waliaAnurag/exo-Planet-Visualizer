import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

type dropdownOptions = Array<{ key: number | string; value: string | number }>
interface IProps{
    multiSelectOptions : dropdownOptions
    label: string;
    onInput:(value: dropdownOptions) => void
    defaultValue? : dropdownOptions
    
}
export default function MultiSelect(props:IProps) {
  const {multiSelectOptions,label,onInput,defaultValue} = props

  return (
    <Autocomplete
      multiple
      id="tags-standard"
      options={multiSelectOptions}
      getOptionLabel={(option) => option.value as string}
      style={{ width: 300 }}
      filterSelectedOptions={true}
      getLimitTagsText={(more: string | number) => `+${more}`}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
      onChange={(_,op)=>onInput(op)}
      defaultValue={defaultValue}
    />
  );
}
