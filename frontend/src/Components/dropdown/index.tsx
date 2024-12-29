import { useState } from 'react';
import Button from '../buttons'

interface IProps {
    dropdownCollapsedText: string;
    menuItemLists: Array<{disp:string; value:string}>;
    buttonOnClick?: (evt?: any) => void;
    menuItemOnClick: (index:number,item:string) => void;
    buttonStyles?: string;
    menuItemStyles?: Object;
}
function Dropdown(props: IProps) {
    const { dropdownCollapsedText, menuItemLists, buttonOnClick, menuItemOnClick, buttonStyles='', menuItemStyles } = props
    
    const[open, setOpen]=useState(false)
    const [selectedOption,setSelectedOption] = useState(dropdownCollapsedText)

    function dropdownOpenClose(evt:any){
        setOpen(!open);
        buttonOnClick && buttonOnClick(evt)
     }

     function menuItemHandler(index:number,evt:{disp:string; value:string}){
        setOpen(false);
        menuItemOnClick(index,evt.value)
        setSelectedOption(evt.disp)
     }
     

    return (
        <div>
            <Button buttonText={selectedOption} buttonStyles={buttonStyles} buttonFunc={(evt) => dropdownOpenClose(evt)} />
            {open && (<div className={`${menuItemStyles} absolute top-34 shadow-lg rounded-md bg-headingFontColor p-6 h-30% overflow-y-auto`}>
                {menuItemLists.map((item,index:number) => {
                    return (<div key={index} className='p-1 cursor-pointer font-display text-md' onClick={() => menuItemHandler(index,item)}>
                        {item.disp}
                    </div>)
                })}
            </div>)}
        </div>
    )
}

export default Dropdown
