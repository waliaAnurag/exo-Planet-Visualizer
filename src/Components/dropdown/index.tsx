import { useState } from 'react';
import Button from '../buttons'

interface IProps {
    dropdownCollapsedText: string;
    menuItemLists: Array<string>;
    buttonOnClick: (evt?: any) => void;
    menuItemOnClick: (index:number,evt?:Event) => void;
    buttonStyles?: string;
    menuItemStyles?: Object;
}
function Dropdown(props: IProps) {
    const[open, setOpen]=useState(false)
   
    const { dropdownCollapsedText, menuItemLists, buttonOnClick, menuItemOnClick, buttonStyles='', menuItemStyles } = props

    function dropdownOpenClose(evt:any){
        setOpen(!open);
        buttonOnClick(evt)
     }

     function menuItemHandler(index:number,evt?:Event){
        setOpen(false);
        menuItemOnClick(index,evt)
     }

    return (
        <div>
            <Button buttonText={dropdownCollapsedText} buttonStyles={buttonStyles} buttonFunc={(evt) => dropdownOpenClose(evt)} />
            {open && (<div className={`${menuItemStyles} absolute top-34 shadow-lg rounded-md bg-headingFontColor p-6 h-30% overflow-y-auto`}>
                {menuItemLists.map((item: string,index:number) => {
                    return (<div className='p-1 cursor-pointer font-display text-md' onClick={(evt?: any) => menuItemHandler(index,evt)}>
                        {item}
                    </div>)
                })}
            </div>)}
        </div>
    )
}

export default Dropdown
