import { useState, useEffect} from "react"
import Player from "./Player"


export default function Players({handleSelectedPlayer,}) {
  const [players, setPlayers] = useState([])

  useEffect(()=>{
    fetch('/players.json')
    .then(res=>res.json())
    .then(data=>setPlayers(data))
  },[])
  //console.log(players)
 
  

  return (
    <div  className="container mx-auto ">
      <div>
        <h1 className="text-base md:text-xl lg:text-2xl font-bold">Available Players</h1>
      </div>
      <div className="my-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-2xl border border-green-500">
        {
        players.map(player => <Player
          key={player.playerId}
          player={player}
          handleSelectedPlayer={handleSelectedPlayer}
          
          ></Player>)
        }
        
      </div>
    </div>
  )
}
