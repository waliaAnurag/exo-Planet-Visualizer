interface IProps {
    buttonFunc: (evt: any) => void;
    buttonText: string;
    buttonStyles?: string
}
function Button(props: IProps) {
    const { buttonText, buttonStyles='', buttonFunc } = props;
    
    
    let finalButtonStyles='bg-landingPageButton p-4 outline-none rounded-sm hover:rounded-xl duration-200'
    if(buttonStyles){
        finalButtonStyles = buttonStyles
    }
  
    return (

        <button className={`${finalButtonStyles}  font-display font-bold text-sm text-headingFontColor `}
            onClick={(evt) => buttonFunc(evt)
            }>
            {buttonText}
        </button>

    )
}

export default Button
