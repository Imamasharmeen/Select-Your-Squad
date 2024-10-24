import { useState, useEffect} from "react"
import Player from "./Player"


export default function Players({coins, setCoins}) {
  const [players, setPlayers] = useState([])

  useEffect(()=>{
    fetch('../../public/players.json')
    .then(res=>res.json())
    .then(data=>setPlayers(data))
  },[])

  const handleChoosePlayers = (player) => {
    //console.log(coins)
    //console.log(parseInt(player.biddingPrice));
    //console.log(typeof player.biddingPrice)
    const price = parseInt(player.biddingPrice)
    console.log(price)
    if(coins > price){
      setCoins(coins - price)
      console.log('Here')
    }
    else {
    alert("Not enough coins to select this player!");
    }
  }
  

  return (
    <div className="container mx-auto my-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-2xl border border-green-500">
      {
      players.map(player => <Player
        key={player.playerId}
        player={player}
        handleChoosePlayers = {handleChoosePlayers}
        ></Player>)
      }
      
    </div>
  )
}
