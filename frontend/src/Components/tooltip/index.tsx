interface IProps{
    message : string;
    children : any
}

export default function Tooltip(props:IProps) {
    const { message, children } = props
    return (
    <div className="group relative flex">
        {children}
        <span className="absolute z-50 top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">{message}</span>
    </div>
    )
}
