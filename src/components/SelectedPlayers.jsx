import button from '../assets/delete.png'



export default function SelectedPlayers({selectedPlayers, handleDelete,showAvailablePlayers}) {
  //console.log(selectedPlayers)
  return (
    <div className="w-10/12 mx-auto ">
      <div>
          <h1 className="text-base md:text-xl lg:text-2xl font-bold">
          Selected Player({selectedPlayers.length}/9)</h1>
        </div>
      <div className="mx-auto p-5">
        {
          selectedPlayers.map((player)=> (
         

            <div className='w-full flex justify-between items-center my-5 p-4 rounded-xl border border-gray-300'>
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
                <button onClick={()=> handleDelete(player.playerId)} ><img className='mx-auto' src={button} alt="button" /> </button>
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
