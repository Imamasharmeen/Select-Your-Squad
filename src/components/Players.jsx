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
    <div>
      <p>Player:{players.length}</p>
      players.map()
      <Player></Player>
    </div>
  )
}
