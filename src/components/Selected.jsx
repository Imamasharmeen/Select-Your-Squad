

export default function Selected({selectedPlayers, handleDelete}) {
  //console.log(selectedPlayers)
  return (
    <div>
      {
        selectedPlayers.map((player)=> (
          <div className="flex">
            <img></img>
            <p>{player.name}</p>
            <button onClick={()=> handleDelete(player.playerId)}>Delate</button>
          </div>
          
         
        ))
      }
    </div>
  )
}
