import Available from "./Available";
import Selected from "./Selected";


export default function AvailableButton({handleIsActive, isActive}) {
  //console.log(isActive)
  return (
    <div className="container mx-auto my-20 flex  border border-blue-500">
      
      <button 
        onClick={()=>(handleIsActive('available'))} 
        className={`${isActive.available?'bg-[#E6FD29] py-3 px-5 ':'py-3 px-5  border border-gray-400'}`}>Available</button>
      <button
        onClick={()=>(handleIsActive('selected'))}
        className={`${isActive.available?'py-3 px-5 border border-gray-400':'bg-[#E6FD29] py-3 px-5 '}`}
        >selected 0</button>
      {isActive.available?<Available></Available> : <Selected></Selected>}
      
    </div>
  )
}
