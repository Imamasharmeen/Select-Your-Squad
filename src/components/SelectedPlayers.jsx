export default function SelectedPlayers({selectedPlayers, handleDelete,showAvailablePlayers}) {
  //console.log(selectedPlayers)
  return (
    <div className="container mx-auto ">
      <div>
          <h1 className="text-base md:text-xl lg:text-2xl font-bold">
            Available Players({6-selectedPlayers.length}/6)</h1>
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
        <button onClick={showAvailablePlayers}>Add More Player</button>
      </div>
    </div>
   
  )
};
