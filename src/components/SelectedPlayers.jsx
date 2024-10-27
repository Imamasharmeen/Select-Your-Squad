export default function SelectedPlayers({selectedPlayers, handleDelete,showAvailablePlayers}) {
  //console.log(selectedPlayers)
  return (
    <div className="container mx-auto ">
      <div>
          <h1 className="text-base md:text-xl lg:text-2xl font-bold">
            Available Players({9-selectedPlayers.length}/9)</h1>
        </div>
      <div className="container mx-auto my-5 p-4 border border-black">
        {
          selectedPlayers.map((player)=> (
         

            <div className='w-full flex justify-between gap-4 items-center border border-black'>
              <div className=" flex gap-5 items-center">
                <div>
                  <img className='w-20 rounded-full border border-gray-300' src={player.image}></img>
                </div>
                    
                <div>
                  <p>{player.name}</p>
                  <p>{player.role}</p>
                  <p>$ {player.biddingPrice}</p>
                </div>
              </div>
              <div>
                <button onClick={()=> handleDelete(player.playerId)}>Delete</button>
              </div>
                
            </div>
          ))
        }
      </div> 
      <div>
        <button onClick={showAvailablePlayers}
           className='text-base md:text-lg lg:text-xl font-semibold py-3 px-5 rounded-2xl 
        bg-[#E6FD29] hover:bg-[#E6FD29] ring-4 ring-[#E6FD29] ring-offset-4 ring-offset-slate-800 hover:ring-offset-slate-500 dark:ring-offset-slate-900'
        >Add More Player</button>
      </div>
    </div>
   
  )
};
