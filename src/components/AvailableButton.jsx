
import Players from "./Players";
import SelectedPlayers from "./SelectedPlayers";




export default function AvailableButton({handleIsActive, isActive, selectedPlayers, handleDelete ,handleSelectedPlayer, showAvailablePlayers, }) {
 
  
  //console.log(selectedPlayers)
  return (
    <div >
      <div className="w-10/12 mx-auto flex justify-end rounded-2xl  mt-14 items-end sticky top-36 z-50  bg-opacity-50 ">
        
          <button 
         
            onClick={()=>(handleIsActive('available'))} 
            className={`${isActive.available?'bg-[#E6FD29] py-3 px-5 rounded-l-2xl border border-gray-400':'rounded-l-2xl py-3 px-5  border border-gray-400'}`}>Available</button>
          <button
            onClick={()=>(handleIsActive('selected'))}
            className={`${isActive.available?'py-3 px-5 border border-gray-400 rounded-r-2xl':'bg-[#E6FD29] py-3 px-5 rounded-r-2xl border border-gray-400'}`}
            >Selected ({selectedPlayers.length})
          </button>
        
        

      </div>
      <div>
  
        {isActive.available?<Players  handleSelectedPlayer={handleSelectedPlayer}></Players>:<SelectedPlayers selectedPlayers={selectedPlayers} handleDelete={handleDelete} showAvailablePlayers={showAvailablePlayers}></SelectedPlayers>}
      </div>
      
    </div>
    
  )
}

