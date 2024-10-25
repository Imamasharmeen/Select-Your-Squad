import user from '../assets/user.png'
import flag from '../assets/flag.png'

export default function Player({player, handleSelectedPlayer}) {
  //console.log(handleSelectedPlayer)
  //console.log(player) handleChoosePlayers, 
  return (
    
    <div className="container mx-auto border border-gray-300 rounded-2xl p-4">
      <div className="rounded-2xl border border-gray-300 p-3">
        <img className="w-full" src={player.image}></img>
      </div>
      <div>
        
        <p className='flex text-sm md:text-base lg:text-lg font-bold py-2'><img src={user} alt="User" />{player.name}</p>
        <div className="flex justify-between py-2">
          <p className='flex text-gray-400'><img src={flag} alt="Flag" />{player.country}</p>
          <p className='border rounded-lg px-3 bg-slate-300'>{player.role}</p>
        </div> 
        <hr/>
        <div className="flex justify-between py-2 ">
          <div>
            <p>{player.battingType}</p>
            <p>Price: ${player.biddingPrice}</p>
          </div>
          <div>
            <p>{player.bowlingType}</p>
            <button className='border rounded-xl px-3 hover:bg-[#E6FD29] hover:border-gray-600'
            //onClick = {() => handleChoosePlayers(player)}
            onClick = {() => handleSelectedPlayer(player)}
            >Choose player</button>
          </div>
        </div>
      </div>

    </div>
  )
}


