

export default function Selected({selectedPlayers, handleDelete}) {
  //console.log(selectedPlayers)
  return (
    <div>
      {
        selectedPlayers.map((player)=> (
          <div className='flex gap-4 items-center'>
            <div>
              <img className='w-20 rounded-full border border-gray-300' src={player.image}></img>
            </div>
                
            <div>
              <p>{player.name}</p>
              <p>{player.role}</p>
            </div>
            <div>
              <button onClick={()=> handleDelete(player.playerId)}>Delete</button>
            </div>
              
          </div>
        ))
      }
    </div> 
   
  )
};
