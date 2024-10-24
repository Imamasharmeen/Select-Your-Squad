import { useState, useEffect} from "react"
import Player from "./Player"


export default function Players() {
  const [players, setPlayers] = useState([])

  useEffect(()=>{
    fetch('../../public/players.json')
    .then(res=>res.json())
    .then(data=>setPlayers(data))
  },[])

  return (
    <div className="container mx-auto my-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-2xl border border-green-500">
      {
      players.map(player => <Player
        key={player.playerId}
        player={player}
        ></Player>)
      }
      
    </div>
  )
}
