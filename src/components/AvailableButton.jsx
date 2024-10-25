import Available from "./Available";
import Selected from "./Selected";


export default function AvailableButton({handleIsActive, isActive, selectedPlayers, handleDelete}) {
  //console.log(selectedPlayers)
  return (
    <div className="container mx-auto flex rounded-2xl border border-blue-500">
      
      <button 
        onClick={()=>(handleIsActive('available'))} 
        className={`${isActive.available?'bg-[#E6FD29] py-3 px-5 rounded-l-2xl':'rounded-l-2xl py-3 px-5  border border-gray-400'}`}>Available</button>
      <button
        onClick={()=>(handleIsActive('selected'))}
        className={`${isActive.available?'py-3 px-5 border border-gray-400 rounded-r-2xl':'bg-[#E6FD29] py-3 px-5 rounded-r-2xl'}`}
        >Selected ({selectedPlayers.length})</button>
        
      {isActive.available?<Available></Available> : <Selected selectedPlayers={selectedPlayers} handleDelete={handleDelete}></Selected>}
      
    </div>
    
  )
}
