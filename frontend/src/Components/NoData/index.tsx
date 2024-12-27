interface IProps{
    message:string;
}
function NoData({message}:IProps) {
    
  return (
    <div className='flex items-center justify-center w-[100%]'>
        {message}
    </div>
  )
}

export default NoData

